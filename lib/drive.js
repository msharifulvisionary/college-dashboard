// Google Drive URL converter utility
export function toDirectDriveUrl(url) {
  try {
    // Check if it's a Google Drive file link
    const fileMatch = url.match(/\/file\/d\/([^/]+)\//)
    if (fileMatch && fileMatch[1]) {
      return `https://drive.google.com/uc?export=download&id=${fileMatch[1]}`
    }

    // Check if it's already a direct download link
    if (url.includes("drive.google.com/uc?export=download")) {
      return url
    }

    // For folder/share links or other URLs, return as is
    return url
  } catch (error) {
    console.error("Error converting Drive URL:", error)
    return url
  }
}
