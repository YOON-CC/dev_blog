import "@/styles/SocialBtnSide.css";
import Link from "next/link";

export default function SocialBtnSide() {
  return (
    <nav className="side-icon-list">
      <ul className="side-icon-list-ul">
        {/* 깃허브 */}
        <li className="side-icon-item-one">
          <Link href={"https://github.com/YOON-CC"}>
            <svg
              enableBackground="new 0 0 512 512"
              id="Layer_1"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="M218.7,445.5c-6.6,0.7-12.2,1.4-17.8,2c-29.1,2.9-54.5-5-73.7-27.7c-6-7.1-9.4-16.3-14.5-24.2c-7.9-12.4-16-24.7-24.7-36.6   c-3-4.1-8.2-6.5-12.2-10c-1.3-1.1-1.7-3.2-2.6-4.9c1.8-0.7,3.5-1.9,5.3-2.1c23-2.1,39.2,8.5,50.5,27.6   c14.1,23.8,34.5,36.8,62.2,36.8c8,0,16-2.7,23.9-4.5c1.5-0.4,3.3-2.7,3.5-4.4c1.4-10.4,2.7-20.8,7.5-30.3c1.8-3.5,3.9-6.8,6-10.4   c-8.1-1.6-15.9-2.8-23.6-4.7c-35.5-9-64.8-26.8-81.8-60.6c-6.6-13.2-10.3-27.4-10.8-42.2c-0.8-22.8-0.5-45.7,4.1-68.2   c3.3-15.8,9.3-30.5,21.3-41.9c2.6-2.5,3.1-4.7,1.7-8.5c-6.7-18.7-7.4-37.7-1.7-56.8c1.2-4.1,2.3-8.2,3.5-12.5   c27.4,5.2,43.7,23.7,59,44.2c15.8-11.7,34.5-12.7,52.7-13.9c21.6-1.4,43.3-1.1,64.8,2.4c11.2,1.8,18.1,4.1,29,10.6   c9.4-9.7,18.2-19.5,27.9-28.4c7.7-7.1,17.3-11.6,27.7-14c2.9-0.7,4.4-0.4,5.6,2.8c8.1,22.1,9.3,44.1,0.4,66.2   c-1.2,3-1.1,5.1,1.4,7.5c14.4,13.7,21,31.4,23.2,50.5c2,17.7,3.1,35.5,3.1,53.3c0,25.3-7.5,48.5-23.4,68.4   c-11.2,14.1-25.7,24.2-42.1,31.8c-15.9,7.3-32.5,11.5-49.7,13.7c-0.4,0.1-0.8,0.4-1.5,0.7c11.8,16.9,13.7,35.9,13.5,55.6   c-0.3,28.7-0.2,57.3,0,86c0,4.5-1.3,5.6-5.7,5.6c-35.5-0.2-71-0.2-106.5,0c-4.4,0-5.8-1.4-5.8-5.7c0.2-15.5,0.1-31,0.1-46.5   C218.7,449.9,218.7,447.9,218.7,445.5z" />
              </g>
            </svg>
          </Link>
        </li>
        {/* 유튜브 */}
        <li className="side-icon-item-two">
          <Link href={"https://www.youtube.com/@yooncc"}>
            <svg height="24" version="1.1" viewBox="0 0 24 24" width="24">
              <rect
                height="24"
                id="Artboard15"
                style={{ fill: "none" }}
                width="24"
                x="0"
                y="0"
              />
              <g>
                <path
                  className="side-icon-item-two-path1"
                  d="M2.093,9.075c0.125,-1.941 1.629,-3.509 3.562,-3.716c2.005,-0.202 4.136,-0.311 6.345,-0.311c2.209,0 4.34,0.109 6.345,0.312c1.933,0.206 3.437,1.774 3.562,3.715c0.061,0.956 0.093,1.933 0.093,2.925c0,0.992 -0.032,1.969 -0.093,2.925c-0.125,1.941 -1.629,3.509 -3.562,3.716c-2.005,0.202 -4.136,0.311 -6.345,0.311c-2.209,0 -4.34,-0.109 -6.345,-0.312c-1.933,-0.206 -3.437,-1.774 -3.562,-3.715c-0.061,-0.956 -0.093,-1.933 -0.093,-2.925Z"
                />
                <path
                  className="side-icon-item-two-path2"
                  d="M15.055,12l-4.909,2.995l0,-5.99l4.909,2.995Z"
                />
              </g>
            </svg>
          </Link>
        </li>
        {/* 링크드인 */}
        <li className="side-icon-item-three">
          <Link
            href={
              "https://www.linkedin.com/in/%EC%9C%A4%EC%B0%AC-%EC%A1%B0-8a6581276/"
            }
          >
            <svg
              enableBackground="new 0 0 512 512"
              id="Layer_1"
              viewBox="0 0 512 512"
              width="24" /* Adjusted the width */
              height="24" /* Adjusted the height */
            >
              <g transform="scale(0.7) translate(128, 128)">
                <path
                  className="side-icon-item-three-path1"
                  d="M173.5,508.7c0-2.4,0-4.7,0-7c0-107.7,0-215.3,0-323c0-3-0.2-5.4,4.2-5.4c31.8,0.2,63.7,0.1,95.5,0.1   c0.8,0,1.6,0.2,2.9,0.4c0,14,0,27.8,0,41.7c0.4,0.1,0.7,0.3,1.1,0.4c4-5.2,7.8-10.6,12-15.7c12.2-15,27.5-26,45.5-32.6   c9.8-3.6,20.5-5.8,30.8-6.3c14.2-0.6,28.7-0.4,42.7,2c23,3.9,43.3,14.1,60.1,30.8c15.9,15.7,26.4,34.6,32.1,55.9   c3,11.3,4.9,22.9,6.7,34.4c1.2,8,1.8,16.2,1.8,24.2c0.1,65,0.1,130,0.1,195c0,1.6-0.1,3.2-0.2,5.3c-1.9,0-3.5,0-5.1,0   c-30.7,0-61.3-0.1-92,0.1c-5.1,0-6-1.7-6-6.3c0.1-59.8,0.3-119.7-0.1-179.5c-0.1-10.5-1.1-21.4-3.8-31.5   c-4.9-17.7-16.1-30.5-33.9-37c-15-5.5-30.2-6.5-45.6-2.6c-17,4.3-28.7,15.6-37.5,30.5c-6.8,11.5-8.1,24.2-8.2,36.9   c-0.4,60.7-0.2,121.3-0.2,182c0,2.3,0,4.6,0,7.1C241.9,508.7,208,508.7,173.5,508.7z"
                />
                <path
                  className="side-icon-item-three-path2"
                  d="M109.1,342.6c0,53.3-0.1,106.6,0.1,159.9c0,4.8-1,6.6-6.3,6.5c-30.5-0.3-61-0.3-91.5,0c-5,0-6.1-1.7-6.1-6.3   c0.1-107.1,0.1-214.3,0-321.4c0-4.3,1.2-5.8,5.6-5.8c30.8,0.2,61.6,0.2,92.5,0c4.8,0,5.7,1.8,5.7,6.1   C109.1,235.3,109.1,289,109.1,342.6z"
                />
                <path
                  className="side-icon-item-three-path3"
                  d="M56.1,4.8C89,4,108.7,27.9,108.8,57.2c0.1,30-20.9,52.4-53.9,52.3c-30.7,0-52.4-22-52.3-53.1C2.7,27.3,23.8,3.8,56.1,4.8z"
                />
              </g>
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
