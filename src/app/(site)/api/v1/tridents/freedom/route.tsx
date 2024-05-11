import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { extractAndModifyGetImageData } from "@/lib/utils";

export async function GET(req: NextRequest) {
  const { fill, size } = extractAndModifyGetImageData(req.url);

  return new ImageResponse(
    (
      <svg
        width={256 * size}
        height={400 * size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M255.596 324.829C228.464 317.897 202.944 305.846 180.442 289.34C158.5 312.845 138.233 350.09 137.147 400H118.448C117.852 379.459 114.486 359.642 107.028 340.587C99.6722 321.706 88.9145 304.3 75.2763 289.212C52.7526 305.79 27.188 317.891 0 324.843V0.796059C62.101 40.3646 110.207 144.585 52.6006 244.64L76.9808 263.333C79.3109 261.201 81.9646 258.848 84.4961 256.389C96.3298 244.78 106.684 231.786 115.327 217.695C116.492 215.818 116.708 214.368 115.622 212.257C107.008 195.46 100.814 177.556 97.2184 159.063C93.5413 140.342 92.3733 121.224 93.7448 102.202C95.6758 74.3972 103.122 47.2398 115.658 22.2755C119.254 15.1181 123.396 8.25204 127.575 0.753414C135.293 12.4416 141.824 24.8551 147.072 37.813C154.532 56.0386 159.345 75.2157 161.369 94.7741C163.479 114.824 162.731 135.068 159.147 154.912C155.446 174.932 149.003 194.361 139.995 212.662C139.449 213.792 139.326 215.697 139.916 216.714C150.165 234.015 163.081 249.631 178.198 262.999C178.362 263.106 178.545 263.181 178.737 263.219C186.799 257.05 194.804 250.909 202.938 244.675C175.717 196.585 169.474 145.878 186.634 93.0042C199.054 54.7577 222.377 24.0596 255.596 0V324.829ZM236.12 298.566V43.7905C217.012 62.9813 201.988 96.1601 197.4 135.984C192.509 178.446 205.189 216.806 230.396 251.065C223.995 254.889 217.609 258.393 211.582 262.438C205.555 266.482 199.946 270.967 193.854 275.48C206.941 284.845 221.135 292.597 236.12 298.566ZM19.4106 43.9185V298.587C34.6389 292.532 49.0428 284.622 62.2879 275.04L25.5308 250.596C80.0085 177.714 61.4897 90.4099 19.4106 43.9185ZM165.454 277.172C151.158 264.503 138.587 250.053 128.057 234.184C122.001 241.918 116.449 249.615 110.25 256.766C104.051 263.916 97.204 270.519 90.4941 277.513C107.035 296.05 119.326 317.153 127.812 341.418C135.912 317.742 148.709 295.901 165.454 277.172ZM127.791 42.6178C107.294 92.5991 107.294 142.524 127.791 192.391C148.225 142.462 148.225 92.5375 127.791 42.6178Z"
          fill={fill}
        />
      </svg>
    ),
    {
      width: 256 * size,
      height: 400 * size,
    },
  );
}
