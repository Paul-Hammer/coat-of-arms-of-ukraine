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
        width={258 * size}
        height={400 * size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M140.983 3.67565C135.063 11.5962 131.231 21.8768 130.608 31.5056C130.397 34.7787 130.926 55.8875 131.784 78.414C133.556 124.906 133.408 141.729 131.108 155.379C128.298 172.063 123.906 186.703 117.307 201.385C113.807 209.175 105.136 225.605 103.719 227.132C103.087 227.814 97.4258 226.81 91.7989 225.019C84.9559 222.842 79.2947 215.411 79.28 208.587C79.2701 203.939 81.1017 199.284 84.1941 196.097C87.972 192.205 90.6619 191.009 96.7516 190.513C101.49 190.127 102.011 189.941 101.871 188.684C99.2615 165.274 92.861 113.774 91.8213 107.819C90.1116 98.0329 88.355 91.8557 85.0497 84.015C77.5969 66.3326 65.3944 50.2087 50.8129 38.7736C43.5295 33.0627 33.099 26.5011 32.1924 27.0612C31.7303 27.3469 31.6365 63.0322 31.9137 132.592C32.1441 190.398 32.3401 249.428 32.3485 263.772L32.3646 289.852H63.5201C80.6557 289.852 94.6757 289.991 94.6757 290.161C94.6757 292.373 100.654 309.079 103.91 315.964C107.667 323.909 108.094 325.249 107.686 327.802C106.99 332.155 105.635 333.876 98.8099 339.08C90.4385 345.463 88.1673 349.166 88.6399 355.663C88.8227 358.166 89.291 361.632 89.6817 363.365C90.6304 367.574 89.583 371.38 86.7685 373.951C85.5552 375.06 84.2837 375.967 83.9442 375.967C83.6046 375.967 81.9075 376.925 80.1733 378.095L77.0207 380.223L71.6703 376.236C68.7284 374.043 66.2065 372.157 66.0665 372.046C65.2824 371.417 67.968 363.599 70.7314 358.465C73.5298 353.267 73.9324 351.985 73.9198 348.313C73.8897 339.827 70.9807 334.29 64.4198 330.233C61.8945 328.672 61.7698 328.716 61.7698 331.16C61.7698 332.35 60.0615 336.544 57.8337 340.825C54.0594 348.076 53.899 348.6 53.9459 353.555C53.9851 357.769 54.3632 359.466 55.9973 362.763L58.0004 366.804L53.9508 364.646C50.1653 362.628 49.7214 362.114 47.1204 356.741C42.0816 346.331 35.0027 340.548 25.2072 338.843C21.3019 338.162 19.5747 338.213 14.9889 339.143C7.14191 340.733 4.64736 340.612 2.57779 338.542C1.63262 337.597 0.827479 336.416 0.788973 335.916C0.750466 335.418 0.499818 335.797 0.23097 336.76C-0.523765 339.462 0.656649 346.209 2.53018 349.907C5.96639 356.688 14.706 362.751 23.8224 364.68C29.0859 365.793 38.0916 365.652 43.0065 364.379L47.1995 363.292L53.9599 367.154C57.6776 369.277 61.6648 371.682 62.82 372.496L64.9204 373.977L60.8961 373.521C55.7824 372.942 50.3543 374.445 46.2523 377.574C44.0777 379.232 42.3456 381.593 40.0037 386.092C38.2218 389.516 36.0522 392.893 35.1826 393.597L33.6017 394.877L36.9364 396.352C43.7878 399.383 53.6792 396.275 58.09 389.706C59.3397 387.845 60.2107 386.078 60.0265 385.779C59.8417 385.481 61.5437 383.23 63.8079 380.777L67.9253 376.317L70.0005 377.524C71.1417 378.188 72.3277 378.503 72.6358 378.224C72.9438 377.946 72.9851 378.086 72.7275 378.536C72.4677 378.989 73.0453 379.974 74.0206 380.741C75.0582 381.557 75.619 382.553 75.3852 383.162C75.1009 383.904 75.6442 384.323 77.3056 384.642C79.5908 385.081 81.9348 387.213 90.7326 396.854C92.9723 399.308 94.3767 400.35 94.8304 399.897C95.8715 398.855 94.836 397.449 87.9636 390.569L81.7689 384.368H84.2165C85.5629 384.368 91.0666 384.994 96.4463 385.758C113.968 388.246 129.047 387.408 139.834 383.347C151.698 378.88 157.837 375.042 166.64 366.591C181.792 352.044 191.925 327.132 193.855 299.683C194.25 294.076 194.566 292.816 195.926 291.456L197.53 289.852H227.318H257.105L257.161 160.504C257.193 89.3618 257.283 30.2664 257.362 29.1791C257.441 28.0918 257.302 27.0766 257.054 26.9233C256.805 26.7693 254.43 27.9434 251.777 29.532C227.988 43.7739 209.241 67.1686 201.107 92.7665C198.162 102.035 196.269 114.207 191.633 153.677C189.508 171.776 187.591 187.45 187.374 188.509L186.981 190.434H191.476C206.806 190.434 215.453 206.911 206.371 218.818C202.956 223.295 198.134 225.577 188.767 227.148L185.89 227.63L181.813 220.428C167.365 194.911 159.87 172.177 156.941 144.99C155.926 135.57 156.322 107.73 158.066 65.8117C159.579 29.4276 159.189 24.2047 154.149 13.3773C151.562 7.81969 146.052 0 144.722 0C144.176 0 142.494 1.65369 140.983 3.67565ZM234.001 70.3366C225.54 81.8026 220.366 92.8912 217.506 105.687C216.599 109.748 214.275 125.987 212.34 141.775C210.406 157.563 208.646 171.503 208.429 172.752C208.062 174.859 208.276 175.175 211.391 177.136C218.394 181.544 224.534 189.019 227.059 196.21L227.981 198.835H233.091H238.201V131.974C238.201 95.1995 238.122 65.113 238.026 65.1144C237.93 65.1165 236.118 67.4661 234.001 70.3366ZM51.268 132.238V198.835H56.1086H60.95L63.7652 193.019C66.9424 186.454 70.6131 182.274 77.0031 177.942C80.599 175.504 81.3236 174.694 81.0422 173.426C80.8538 172.576 79.4228 161.326 77.8615 148.426C73.9296 115.927 73.1441 110.527 71.2376 102.918C68.5897 92.3493 63.4291 81.4098 56.5308 71.7432C50.7352 63.621 51.268 57.4977 51.268 132.238ZM142.641 188.477C138.452 201.191 133.998 211.431 127.444 223.423C123.216 231.16 122.768 232.441 124.293 232.441C126.695 232.441 136.762 238.189 140.628 241.768L144.854 245.681L147.945 242.517C151.585 238.79 157.277 235.204 162.413 233.402C164.434 232.693 166.088 231.834 166.088 231.492C166.088 231.151 164.515 228.145 162.592 224.813C157.765 216.449 151.279 201.899 147.813 191.658C146.217 186.942 144.831 182.989 144.733 182.876C144.635 182.763 143.694 185.283 142.641 188.477ZM51.5508 218.011C51.3856 218.442 51.3331 230.608 51.4346 245.046L51.618 271.298H72.2717H92.9254L93.3917 264.647C93.6479 260.989 94.4159 255.246 95.0979 251.884C95.7798 248.523 96.1593 245.594 95.9415 245.376C95.7245 245.158 92.9408 244.358 89.7566 243.598C77.9455 240.776 68.8089 233.655 64.1076 223.607C62.6877 220.572 61.4072 217.942 61.2622 217.762C60.6748 217.033 51.8393 217.26 51.5508 218.011ZM228.712 217.581C228.306 217.86 226.833 220.512 225.44 223.474C220.504 233.964 210.824 241.229 198.075 244.01C194.481 244.794 192.715 245.49 192.926 246.04C193.85 248.45 195.589 258.868 196.035 264.675L196.544 271.298L217.381 271.484L238.218 271.669L238.035 244.529L237.851 217.389L233.65 217.23C231.34 217.143 229.118 217.301 228.712 217.581ZM113.942 254.279C113.3 257.094 112.593 262.161 112.371 265.54L111.969 271.684L123.451 271.491L134.933 271.298L134.82 268.938C134.431 260.769 126.049 251.526 117.321 249.639L115.11 249.162L113.942 254.279ZM169.589 250.321C163.235 252.296 156.427 259.623 154.854 266.182C153.519 271.748 153.313 271.648 166.17 271.648H177.497L177.041 265.721C176.342 256.621 174.636 249.171 173.279 249.293C172.983 249.32 171.322 249.783 169.589 250.321ZM114.279 290.604C114.279 292.336 117.979 302.179 120.517 307.197C123.428 312.954 128.614 320.607 132.724 325.208L135.225 328.008L135.254 308.93L135.283 289.852H124.781C117.766 289.852 114.279 290.101 114.279 290.604ZM154.207 308.93L154.228 328.008L157.021 324.858C160.479 320.957 166.746 311.68 169.081 307.005C170.826 303.513 175.19 291.719 175.19 290.496C175.19 290.132 170.617 289.852 164.688 289.852H154.186L154.207 308.93ZM102.457 365.29C100.334 367.052 99.8524 370.395 101.445 372.315C104.554 376.065 110.79 374.142 110.768 369.44C110.755 366.823 110.27 365.959 108.199 364.87C106.039 363.732 104.168 363.87 102.457 365.29Z"
          fill={fill}
        />
      </svg>
    ),
    {
      width: 258 * size,
      height: 400 * size,
    },
  );
}