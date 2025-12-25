import { NextResponse } from "next/server";

interface GitHubAsset {
  name: string;
  browser_download_url: string;
  size: number;
}

interface GitHubRelease {
  tag_name: string;
  assets: GitHubAsset[];
}

// Cache the response for 5 minutes to avoid GitHub API rate limits
let cachedResponse: { data: unknown; timestamp: number } | null = null;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export async function GET() {
  // Return cached response if valid
  if (cachedResponse && Date.now() - cachedResponse.timestamp < CACHE_TTL) {
    return NextResponse.json(cachedResponse.data);
  }

  try {
    const response = await fetch(
      "https://api.github.com/repos/alminisl/filenestwebsite/releases/latest",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "Filenest-Website",
        },
        next: { revalidate: 300 }, // Next.js cache for 5 minutes
      }
    );

    if (!response.ok) {
      // No releases yet or other error
      const emptyDownloads = { windows: [], macos: [] };
      return NextResponse.json(emptyDownloads);
    }

    const release: GitHubRelease = await response.json();

    const windows: { name: string; url: string; size: number }[] = [];
    const macos: { name: string; url: string; size: number }[] = [];

    for (const asset of release.assets) {
      const name = asset.name.toLowerCase();
      const file = {
        name: asset.name,
        url: asset.browser_download_url,
        size: asset.size,
      };

      if (name.endsWith(".exe") || name.endsWith(".msi")) {
        windows.push(file);
      } else if (name.endsWith(".dmg") || name.endsWith(".pkg") || (name.endsWith(".zip") && name.includes("mac"))) {
        macos.push(file);
      }
    }

    const downloads = { windows, macos };

    // Update cache
    cachedResponse = { data: downloads, timestamp: Date.now() };

    return NextResponse.json(downloads);
  } catch (error) {
    console.error("Failed to fetch GitHub releases:", error);
    const emptyDownloads = { windows: [], macos: [] };
    return NextResponse.json(emptyDownloads);
  }
}
