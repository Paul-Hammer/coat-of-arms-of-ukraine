import { NextRequest, NextResponse } from "next/server";
import { ImageResponse } from "next/og";
import { validateGetImageRequest } from "@/lib/utils";

export async function GET(req: NextRequest) {
  const validationResult = validateGetImageRequest(req);
  if (!validationResult.success) {
    return NextResponse.json(validationResult.errors);
  }
  const { fill, size } = validationResult.data;
  return new ImageResponse(
    (
      <svg
        width={279 * size}
        height={400 * size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M270.811 258.998C275.656 258.755 278.942 255.38 278.974 249.704C278.974 246.636 278.288 242.913 276.471 240.652C274.323 237.988 270.706 236.51 267.298 234.314C267.707 233.519 268.203 232.771 268.776 232.085C274.63 225.811 273.928 219.756 269.293 212.884C265.635 207.466 263.261 201.184 260.362 195.379C257.351 197.413 256.923 199.545 258.352 203.51C259.861 207.455 260.891 211.568 261.42 215.759C261.735 218.819 259.523 221.056 256.188 221.266C253.354 221.443 251.077 218.843 250.851 215.323C250.237 207.484 252.052 199.646 256.051 192.876C258.925 188.031 262.357 183.477 264.933 178.487C266.832 174.832 268.191 170.921 268.97 166.876C270.076 161.086 266.208 155.014 260.645 152.737C260.775 155.829 260.74 158.926 260.54 162.015C260.411 163.242 259.24 165.075 258.247 165.293C257.254 165.511 255.106 164.211 254.88 163.25C253.895 159.035 252.853 154.699 252.91 150.42C252.998 143.742 257.641 139.471 262.139 135.078C273.136 124.291 277.561 111.888 271.303 96.6679C268.009 88.658 263.907 80.7046 264.763 71.4673C263.252 73.2153 262.14 75.2714 261.504 77.4927C260.868 79.7141 260.724 82.0473 261.081 84.33C261.8 89.2474 262.744 94.1325 263.503 99.0498C264.061 102.683 263.665 106.115 261.033 108.981L257.803 103.176C256.68 105.429 256.632 107.213 256.188 108.828C255.477 111.315 254.339 114.48 251.343 113.527C249.486 112.954 247.371 110.072 247.153 108.037C246.781 104.549 247.572 100.867 248.299 97.3623C249.68 90.6766 251.529 84.0797 252.853 77.3859C253.62 73.4617 253.144 69.4729 249.502 66.8891C246.555 64.8059 241.153 65.6618 237.261 68.504C238.069 68.8673 238.779 69.1742 239.482 69.5456C244.254 72.0891 244.593 74.899 240.531 78.5164C239.653 79.3475 238.69 80.0837 237.657 80.7126C232.005 83.9424 227.112 81.617 225.909 75.2946C224.479 67.7934 228.944 61.568 236.543 60.6152C238.806 60.278 241.102 60.2102 243.382 60.4133C249.446 61.1239 254.525 58.7257 258.974 55.1972C260.902 53.4905 262.17 51.1619 262.559 48.6165C262.922 46.0084 259.087 42.6252 256.026 41.8339C256.527 42.4153 256.987 42.9078 257.391 43.4488C261.428 48.673 260.346 52.032 253.677 52.6295C248.348 53.0094 242.992 52.648 237.762 51.5556C233.547 50.7482 230.406 51.5556 227.556 54.4786C219.255 63.0941 217.463 73.599 218.133 85.0648C218.235 88.7785 217.598 92.4755 216.259 95.9412C214.83 99.8896 211.076 100.657 206.36 98.7672C200.926 96.5952 199.771 94.8349 201.467 90.0952C203.163 85.3555 205.569 80.7369 207.264 75.9325C208.798 71.9451 209.882 67.7986 210.494 63.5705C211.003 59.1295 208.355 56.804 203.502 56.2146C208.904 63.7885 208.799 66.3642 202.694 73.8655C199.804 77.4021 196.727 80.7934 193.958 84.4269C187.619 92.7436 186.933 101.609 191.818 110.887C192.512 112.211 193.158 113.56 194.168 115.586C191.673 115.142 190.13 114.932 188.564 114.561C186.206 113.988 183.55 113.6 182.718 116.329C182.104 118.364 182.863 120.827 183.009 123.112L188.435 119.317C189.444 121.101 190.534 122.845 191.422 124.686C191.672 125.468 191.76 126.292 191.681 127.109C191.858 134.489 189.153 141.045 185.851 147.424C184.462 150.105 182.54 150.807 179.948 149.039C177.356 147.271 176.67 144.13 178.39 142.022C180.384 139.6 182.33 140.488 184.204 142.305C184.373 142.475 184.858 142.305 185.399 142.305C184.769 138.558 183.784 134.44 179.981 134.182C178.027 134.053 174.999 137.509 173.868 139.988C171.707 145.044 169.958 150.266 168.636 155.604C166.625 162.96 167.457 169.992 172.003 176.371C172.947 177.52 173.657 178.842 174.094 180.263C175.572 187.03 177.058 193.804 178.027 200.651C178.237 202.153 176.565 205.117 175.386 205.335C173.65 205.649 171.519 204.204 169.678 203.276C169.088 202.977 168.789 201.959 168.507 201.208C166.197 195.201 163.38 189.323 161.732 183.138C157.897 168.692 158.365 154.651 167.385 141.829C169.168 139.139 170.76 136.328 172.148 133.415C178.753 120.455 179.981 104.855 169.678 93.9064C168.668 92.8325 167.635 91.7666 166.658 90.6766C162.071 85.4201 162.782 73.1387 168.047 68.7704C169.126 67.8416 170.516 67.3543 171.938 67.4059C172.641 67.5108 173.263 69.4648 173.553 70.676C173.883 72.3541 174.115 74.0499 174.248 75.7549C175.279 73.6032 175.968 71.304 176.291 68.94C176.751 65.7667 177.712 62.0928 174.547 59.9854C171.155 57.7245 168.192 60.5022 165.342 62.1251C164.357 62.8181 163.483 63.6566 162.75 64.6121C161.498 65.9847 160.327 67.4139 159.084 68.827C159.641 64.8462 161.224 61.6972 162.12 58.3301C162.717 56.1177 163.073 53.3239 162.233 51.3376C159.427 44.6907 154.141 39.399 147.497 36.5855C141.118 33.7675 135.547 37.6352 134.941 45.096C135.418 44.5712 135.797 44.2159 136.112 43.8041C138.244 40.9538 140.577 38.8625 144.606 40.1948C148.635 41.5271 150.258 44.5066 150.258 48.4954C150.258 56.3438 147.158 62.8518 141.498 68.1406C140.328 69.2485 138.902 70.0502 137.347 70.4742C135.942 70.8133 134.005 70.8133 132.955 70.0543C132.309 69.5941 132.64 67.3493 133.003 66.017C133.561 64.4404 134.253 62.9142 135.07 61.4549C123.209 71.4592 119.067 83.7406 124.372 98.9691C119.527 98.4443 116.152 100.204 115.078 104.565C114.004 108.925 112.995 113.568 117.452 117.403C117.75 116.491 117.96 115.885 118.138 115.28C118.832 112.857 119.091 109.627 122.49 109.991C125.89 110.354 126.915 113.665 126.568 116.45C126.026 120.922 125.009 125.324 123.532 129.58C121.311 135.894 118.461 141.982 115.982 148.207C115.239 150.073 114.844 152.083 114.287 154.021L113.067 154.183C111.864 151.13 110.201 148.175 109.547 145.01C107.674 135.95 108.384 126.858 109.991 117.807C111.743 107.899 113.81 98.0163 114.965 88.0281C115.683 81.7623 114.892 75.1574 110.839 69.9574C104.008 61.1965 100.14 51.7655 102.361 39.678C101.604 40.3855 100.902 41.1494 100.261 41.9631C96.2239 48.568 96.6114 55.4071 101.004 61.3015C112.429 76.6431 107.407 92.1704 102.118 107.698C101.545 109.369 98.5574 110.225 96.6922 111.452C95.5295 109.531 93.4058 107.617 93.4058 105.695C93.5222 101.957 94.1889 98.2572 95.3841 94.7138C97.8711 86.6393 96.6599 79.1058 91.0965 75.7468C88.6015 74.2369 84.7823 73.4052 82.1338 74.1884C80.2363 74.7456 79.2836 78.5002 77.9028 80.8337L79.1301 81.6896C79.57 81.2479 80.0544 80.8528 80.5755 80.5108C81.8271 79.8567 83.1351 79.2996 84.419 78.7021C85.0407 80.1151 86.2518 81.5605 86.1711 82.9331C86.024 86.4042 85.4822 89.8473 84.5562 93.1958C83.6034 96.4256 81.3264 98.4523 77.4991 97.5883C72.9612 96.5548 71.4029 94.7219 71.7743 90.3213C72.1538 85.7673 72.9774 81.2536 73.3166 76.7077C73.8252 69.7475 69.6587 62.4723 64.0712 60.0823C58.7824 57.8214 53.5259 58.6773 51.0712 62.3431C56.0532 62.0524 60.9706 62.9326 62.2544 68.1648C63.0619 71.5158 62.2544 75.6661 61.0432 79.0331C58.8631 85.0083 53.0091 87.7455 47.0178 86.5101C41.3172 85.3393 36.9732 79.6872 36.9651 73.5425C36.9651 67.9872 40.316 64.1114 43.3681 59.9934C45.411 57.3598 47.1373 54.4953 48.5116 51.4587C49.852 48.3016 48.7619 45.6047 45.8874 42.9805C47.6799 47.7687 46.0004 51.491 43.0532 54.7047C39.9688 58.0636 36.5937 61.1642 33.4285 64.4586C22.1242 76.3039 22.9316 91.0238 35.003 101.957C37.4253 104.137 39.0968 107.552 40.0899 110.726C41.0831 113.899 38.1763 118.445 35.2452 119.083C31.3049 119.955 29.2297 117.468 27.8894 114.303C27.2273 112.688 26.9931 110.944 26.4763 109.288C25.0875 104.823 24.0055 100.221 22.1322 95.9654C20.5658 92.4126 17.4329 90.2163 12.1441 89.8126C17.3198 93.6399 19.1689 98.0163 19.0881 103.539C18.9751 111.032 18.8539 118.59 19.6452 126.027C20.5415 134.424 23.2546 142.442 29.9645 148.183C33.0893 150.856 36.957 152.648 40.3725 155.006C41.9874 156.112 44.5389 157.59 44.5631 158.938C44.6596 164.672 44.2735 170.404 43.4086 176.073C42.9725 178.915 40.3564 179.625 38.257 177.364C36.4097 175.444 34.9559 173.181 33.9775 170.703C33.2669 168.749 33.7514 166.351 33.703 164.155C35.8346 164.114 37.9663 164.074 40.0899 164.009C40.2837 164.009 40.4775 163.807 40.6713 163.702C37.3042 157.485 32.7259 156.032 28.6322 160.424C25.5933 163.564 23.2864 167.338 21.8766 171.474C20.4667 175.61 19.9887 180.006 20.4769 184.349C21.2844 191.923 25.144 198.269 29.5688 203.154C26.339 203.873 22.6006 203.913 19.7099 205.528C9.42298 211.277 7.08133 223.042 13.8155 232.812C16.5446 236.769 19.7744 237.762 24.6999 236.042C24.0862 234.718 22.9881 233.393 23.0043 232.085C23.0043 230.47 23.5533 227.951 24.6192 227.467C32.4434 223.922 41.9875 226.966 42.6334 236.752C42.8729 241.144 42.1566 245.535 40.534 249.623C38.3619 255.065 34.8819 259.967 32.1366 265.215C27.4534 274.275 26.767 283.455 32.1931 292.483C34.1229 295.712 36.5614 298.595 38.6527 301.712C39.2682 302.82 39.7817 303.982 40.1868 305.184C38.7657 305.725 37.3123 306.799 35.9315 306.702C33.9563 306.584 32.0656 305.859 30.5178 304.626C28.97 303.394 27.8406 301.713 27.2838 299.814C25.4832 294.388 24.6595 288.655 23.1657 283.116C22.1725 279.426 21.349 275.478 19.3788 272.313C15.0428 265.336 6.34656 264.731 0 270.601C5.45029 271.893 10.7149 273.645 12.9192 279.249C14.3939 282.975 15.3265 286.893 15.6887 290.884C16.7949 304.958 17.5459 318.87 24.821 331.757C36.0123 351.596 50.0539 359.517 72.4606 357.159C77.8059 356.594 83.1351 355.835 88.4966 355.545C92.8568 355.278 97.7015 355.391 99.5667 360.195C101.127 364.584 102.138 369.148 102.579 373.785C103.039 377.58 100.834 380.164 97.0474 381.052C92.9698 382.045 87.1723 379.599 85.073 376.03C82.9736 372.461 84.0152 369.53 86.6879 366.922C87.5841 366.041 88.9245 365.605 90.5959 364.661C85.7512 362.053 82.2792 360.785 78.8152 363.207C77.1612 364.302 75.9002 365.897 75.2161 367.759C74.532 369.621 74.4605 371.653 75.0122 373.559C75.9811 377.346 77.3941 381.383 79.7841 384.371C85.8642 391.961 97.6208 394.48 106.995 391.04C111.275 389.466 115.522 387.697 119.914 386.631C124.759 385.461 128.885 385.961 132.341 391.04C134.125 393.674 136.501 395.854 139.277 397.406C142.054 398.958 145.155 399.84 148.333 399.98C151.511 400.12 154.678 399.516 157.58 398.215C160.483 396.913 163.041 394.951 165.051 392.485C174.143 381.23 184.866 373.357 199.715 373.3C208.015 373.3 213.014 369.917 216.13 362.416C218.706 356.231 221.298 355.149 227.959 356.425C232.707 357.337 237.382 358.645 242.13 359.549C252.627 361.544 259.539 354.398 257.633 343.554C256.22 346.267 254.193 348.286 251.174 346.711C247.136 344.571 243.341 341.866 239.441 339.444L239.95 338.524C245.941 340.946 251.497 339.492 255.574 335.181C260.322 330.174 264.884 324.684 268.17 318.66C272.749 310.271 271.4 301.849 265.352 294.211C263.281 291.572 261.56 288.676 260.233 285.595C255.857 275.542 256.002 264.868 256.85 254.25C256.965 252.28 257.584 250.372 258.647 248.71C259.71 247.047 261.182 245.685 262.922 244.754C266.547 242.776 271.804 243.47 274.138 246.208C276.35 248.792 275.97 252.223 273.023 256.099C272.345 257.019 271.643 257.908 270.811 258.998ZM112.89 211.051C114.884 208.193 117.137 205.52 119.139 202.67C123.33 196.711 125.89 190.211 125.09 182.702H126.188C126.737 185.932 127.521 189.161 127.803 192.448C128.732 203.453 128.675 214.418 125.559 225.141C124.986 227.065 124.215 228.924 123.257 230.689C121.562 233.838 119.147 236.05 115.183 235.356C110.823 234.597 108.166 231.988 107.633 227.887C106.826 221.492 109.369 216.09 112.882 211.043L112.89 211.051ZM114.125 244.916C112.389 246.773 110.895 249.01 108.812 250.342C107.77 251.004 105.469 250.39 104.137 249.639C103.329 249.187 102.595 247.039 102.998 246.272C103.363 245.605 103.861 245.021 104.461 244.554C105.061 244.087 105.75 243.749 106.487 243.559C108.764 243.22 111.162 243.688 113.503 243.818L114.125 244.916ZM203.017 353.776C201.951 355.068 200.458 356.707 199.045 356.82C198.131 356.837 197.224 356.655 196.388 356.287C195.551 355.919 194.805 355.374 194.2 354.689C193.635 353.938 194.604 350.797 195.653 350.272C199.691 348.261 203.97 346.881 208.161 345.266L208.629 346.073C206.772 348.633 205.028 351.314 203.009 353.768L203.017 353.776ZM242.736 321.058H187.765C185.641 327.873 184.196 334.292 181.66 340.251C177.147 350.861 169.08 358.887 160.828 366.663C156.25 370.983 151.631 375.254 146.924 379.647C138.429 371.241 129.636 363.151 121.578 354.374C113.075 345.342 108.046 333.59 107.383 321.204C105.574 321.204 104.008 321.204 102.441 321.204C86.9705 321.293 71.4998 321.301 56.029 321.551C52.3874 321.607 51.2488 320.574 51.2327 316.779C51.0874 284.481 50.724 252.231 50.4252 219.957C50.2557 202.88 50.0215 185.802 49.8277 168.725C49.5371 143.581 49.2491 118.434 48.9638 93.2846C48.9638 91.8635 48.9638 90.4343 48.9638 88.6499C70.5227 103.184 89.1425 119.414 99.2679 143.791C107.528 163.678 110.693 184.163 107.988 205.294C107.003 213.013 103.402 220.394 101.012 227.903C99.1065 233.918 96.6679 239.829 95.4487 245.974C93.2767 256.874 103.241 264.747 113.689 260.693C114.731 260.29 115.474 258.828 116.111 257.714C128.142 237.075 133.464 214.531 135.652 190.954C137.267 173.715 135.878 156.605 134.844 139.43C133.786 121.731 132.503 103.991 136.282 86.4052C138.236 77.3052 141.934 70.022 147.142 65.4115C151.93 69.7959 154.635 75.4319 156.435 81.4797C160.408 94.8027 160.642 108.521 160.101 122.256C159.35 141.312 157.243 160.384 157.679 179.399C158.373 207.184 163.759 234.161 178.366 258.489C179.246 259.694 180.555 260.515 182.024 260.782C184.167 261.075 186.34 261.075 188.483 260.782C196.033 259.975 200.433 254.839 198.81 247.467C197.23 240.122 195.001 232.932 192.149 225.981C180.142 197.171 183.969 169.169 195.976 141.578C203.146 125.106 213.829 111.323 228.605 100.834C234.048 96.9666 239.183 92.6791 245.15 88.0443L242.736 321.058Z"
          fill={fill}
        />
        <path
          d="M121.497 41.9633C124.155 42.9508 127.095 42.8463 129.677 41.6726C132.559 40.2192 132.713 36.6987 131.291 33.808C129.725 30.5782 128.062 27.2273 125.785 24.5304C122.512 20.7639 120.506 16.0636 120.052 11.0945C119.906 9.71372 119.624 8.34913 119.244 6.24976C117.363 11.7808 115.578 16.4963 114.165 21.3249C111.792 29.6901 114.86 39.008 121.497 41.9633Z"
          fill={fill}
        />
        <path
          d="M21.7931 257.278C23.6664 257.181 25.9838 255.615 27.1465 254.048C29.3105 251.085 29.8192 247.395 27.3403 244.359C26.2664 243.035 24.0459 242.292 22.2533 242.082C21.6235 242.009 20.6385 244.27 19.944 245.513C19.6211 246.079 19.6211 246.838 19.282 247.395C18.7357 248.233 18.1454 249.042 17.5136 249.817C16.6173 249.123 15.4465 248.606 14.8894 247.702C13.9521 246.001 13.1242 244.243 12.4106 242.437L11.3286 242.631C11.8777 245.941 12.1361 249.325 13.0485 252.53C14.2839 256.81 18.2323 257.456 21.7931 257.278Z"
          fill={fill}
        />
        <path
          d="M34.3812 35.1966C36.6098 36.7549 39.2905 37.7804 41.1558 35.1966C43.021 32.6127 41.7937 30.037 39.1775 28.4221C37.4633 27.4813 36.034 26.0965 35.0395 24.4129C34.0449 22.7294 33.5219 20.8091 33.5254 18.8538C33.5254 17.4488 33.5254 16.0358 33.5254 14.437C27.2757 20.5736 27.7521 30.5537 34.3812 35.1966Z"
          fill={fill}
        />
        <path
          d="M272.337 29.0681C272.065 29.5849 271.841 30.1254 271.667 30.683C270.423 36.6985 269.051 42.6979 268.074 48.7618C267.759 50.7239 268.502 52.8637 268.817 55.4071C276.14 50.5301 276.528 46.5575 272.337 29.0681Z"
          fill={fill}
        />
        <path
          d="M165.083 13.113C168.434 12.0795 169.928 9.51983 169.476 5.99127C169.201 3.80308 168.814 1.63105 168.563 0C166.189 2.42235 163.517 4.65898 161.522 7.38817C160.537 8.72854 160.796 10.9732 160.489 12.8062C162.023 12.9434 163.71 13.5409 165.083 13.113Z"
          fill={fill}
        />
        <path
          d="M202.727 203.106C203.259 214.128 206.408 224.447 213.223 233.482C216.106 237.293 219.215 238.941 224.011 237.1L225.699 129.806C224.584 131.049 224.197 131.421 223.914 131.816C209.38 153.351 201.467 176.937 202.727 203.106Z"
          fill={fill}
        />
        <path
          d="M81.2941 232.699C89.5301 221.556 91.791 208.669 91.4761 195.29C91.0239 176.977 85.9612 159.762 77.2972 143.67C74.8749 139.172 72.0488 134.893 69.4084 130.508L68.3103 130.952L69.9818 236.68C75.747 239.974 78.5649 236.397 81.2941 232.699Z"
          fill={fill}
        />
        <path
          d="M75.634 259.192C74.0917 256.067 71.96 257.028 70.0544 257.577V300.372H103.346L105.994 278.36C105.695 278.211 105.373 278.112 105.041 278.07C91.1612 278.118 81.6333 271.344 75.634 259.192Z"
          fill={fill}
        />
        <path
          d="M217.664 260.306C214.678 264.881 211.1 269.04 207.022 272.676C201.766 277.23 194.91 278.11 188.039 278.199L190.72 300.364H223.882V257.391C220.935 256.39 219.465 257.625 217.664 260.306Z"
          fill={fill}
        />
        <path
          d="M146.996 229.332L131.986 267.008C136.023 269.616 139.842 271.852 143.379 274.396C145.898 276.221 147.901 276.406 150.517 274.485C154.126 271.82 158.067 269.64 162.08 267.056L146.996 229.332Z"
          fill={fill}
        />
        <path
          d="M157.59 298.708H170.953C171.955 292.975 171.616 287.581 168.45 282.559C159.197 286.023 155.58 291.385 157.59 298.708Z"
          fill={fill}
        />
        <path
          d="M124.469 282.22L122.111 298.595H136.645C137.953 290.852 134.449 285.805 124.469 282.22Z"
          fill={fill}
        />
        <path
          d="M135.967 340.639V319.952H125.583C126.116 328.503 131.227 338.378 135.967 340.639Z"
          fill={fill}
        />
        <path
          d="M157.945 341.632C163.95 335.907 167.742 328.247 168.652 320.001H157.945V341.632Z"
          fill={fill}
        />
      </svg>
    ),
    {
      width: 279 * size,
      height: 400 * size,
    },
  );
}