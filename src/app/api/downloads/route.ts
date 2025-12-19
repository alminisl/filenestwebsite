import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const publicDir = path.join(process.cwd(), "public", "downloads");

  const getFiles = (folder: string) => {
    const folderPath = path.join(publicDir, folder);
    if (!fs.existsSync(folderPath)) {
      return [];
    }
    return fs
      .readdirSync(folderPath)
      .filter((file) => !file.startsWith("."))
      .map((file) => ({
        name: file,
        url: `/downloads/${folder}/${file}`,
        size: fs.statSync(path.join(folderPath, file)).size,
      }));
  };

  const downloads = {
    windows: getFiles("windows"),
    macos: getFiles("macos"),
  };

  return NextResponse.json(downloads);
}
