const data = [
    {
        id : "1",
        icon : <svg width={60} height={60} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" >
        <path d="M23.6731 41.5094C23.438 41.5095 23.2106 41.4256 23.0318 41.2728L16.6219 35.8148C16.5126 35.7218 16.4249 35.6062 16.3648 35.476C16.3046 35.3458 16.2734 35.204 16.2734 35.0606C16.2734 34.9171 16.3046 34.7754 16.3648 34.6452C16.4249 34.5149 16.5126 34.3993 16.6219 34.3063L23.0318 28.8483C23.2318 28.678 23.4912 28.594 23.7531 28.6149C24.0149 28.6358 24.2577 28.7599 24.4281 28.9598C24.7824 29.3767 24.7326 30.0018 24.3159 30.3561L18.7921 35.0603L24.3159 39.7643C24.4704 39.8957 24.5808 40.0714 24.6322 40.2676C24.6837 40.4637 24.6737 40.671 24.6036 40.8613C24.5335 41.0516 24.4066 41.2158 24.2402 41.3317C24.0738 41.4476 23.876 41.5097 23.6731 41.5094ZM36.3269 41.5094C36.0467 41.5094 35.7682 41.3911 35.5725 41.1606C35.4022 40.9606 35.3183 40.7012 35.3392 40.4394C35.3602 40.1775 35.4842 39.9347 35.6842 39.7643L41.208 35.0603L35.6842 30.3561C35.4914 30.1838 35.3736 29.9429 35.356 29.6848C35.3384 29.4268 35.4224 29.1722 35.5901 28.9753C35.7577 28.7784 35.9958 28.6549 36.2533 28.6311C36.5108 28.6074 36.7674 28.6853 36.9682 28.8482L43.3782 34.3062C43.4874 34.3992 43.5751 34.5148 43.6353 34.645C43.6955 34.7752 43.7266 34.917 43.7266 35.0604C43.7266 35.2039 43.6955 35.3456 43.6353 35.4759C43.5751 35.6061 43.4874 35.7217 43.3782 35.8147L36.9682 41.2727C36.7895 41.4255 36.5622 41.5094 36.3271 41.5094H36.3269ZM27.7309 45.6033C27.5834 45.6035 27.4377 45.5707 27.3044 45.5074C27.1711 45.444 27.0537 45.3517 26.9607 45.2372C26.8676 45.1227 26.8014 44.9888 26.7667 44.8454C26.732 44.702 26.7298 44.5526 26.7602 44.4083L30.755 25.4409C30.8092 25.1838 30.9632 24.9588 31.1833 24.8153C31.4034 24.6718 31.6715 24.6217 31.9286 24.6758C32.1857 24.73 32.4107 24.8841 32.5542 25.1042C32.6977 25.3243 32.7478 25.5924 32.6937 25.8494L28.6989 44.8167C28.6521 45.0388 28.5304 45.2382 28.3542 45.3814C28.178 45.5246 27.958 45.603 27.7309 45.6033Z" />
        <path d="M53.3491 55.9367H6.65094C2.98387 55.9367 0 52.9534 0 49.2858V9.65094C0 5.98387 2.98387 3 6.65094 3H53.3491C57.0161 3 60 5.98387 60 9.65094V49.2858C60 52.9534 57.0161 55.9367 53.3491 55.9367ZM6.65094 4.98113C4.07618 4.98113 1.98113 7.07618 1.98113 9.65094V49.2858C1.98113 51.8605 4.07618 53.9556 6.65094 53.9556H53.3491C55.9238 53.9556 58.0189 51.8605 58.0189 49.2858V9.65094C58.0189 7.07618 55.9238 4.98113 53.3491 4.98113H6.65094Z" />
        <path d="M59.0094 18.8618H0.990565C0.73075 18.8574 0.483062 18.7511 0.300878 18.5658C0.118694 18.3805 0.0166016 18.1311 0.0166016 17.8712C0.0166016 17.6114 0.118694 17.3619 0.300878 17.1766C0.483062 16.9913 0.73075 16.885 0.990565 16.8806H59.0094C59.2692 16.885 59.5169 16.9913 59.6991 17.1766C59.8813 17.3619 59.9834 17.6114 59.9834 17.8712C59.9834 18.1311 59.8813 18.3805 59.6991 18.5658C59.5169 18.7511 59.2692 18.8574 59.0094 18.8618ZM16.9248 14.1218C15.1968 14.1218 13.79 12.7149 13.79 10.9869C13.79 9.25852 15.1968 7.8522 16.9248 7.8522C18.6532 7.8522 20.0595 9.25852 20.0595 10.9869C20.0595 12.7149 18.6532 14.1218 16.9248 14.1218ZM16.9248 9.83333C16.289 9.83333 15.7711 10.3507 15.7711 10.9869C15.7711 11.6231 16.289 12.1406 16.9248 12.1406C17.561 12.1406 18.0784 11.6233 18.0784 10.9869C18.0784 10.3506 17.561 9.83333 16.9248 9.83333ZM7.2934 14.0914C5.56472 14.0914 4.15854 12.685 4.15854 10.9566C4.15854 9.2281 5.56472 7.82178 7.29325 7.82178C9.02179 7.82178 10.428 9.2281 10.428 10.9566C10.428 12.685 9.02193 14.0914 7.2934 14.0914ZM7.2934 9.80291C6.65759 9.80291 6.13967 10.3208 6.13967 10.9566C6.13967 11.5929 6.65759 12.1102 7.29325 12.1102C7.92948 12.1102 8.44684 11.5929 8.44684 10.9566C8.44684 10.3208 7.92962 9.80291 7.2934 9.80291ZM26.5562 14.1516C24.8284 14.1516 23.4221 12.7453 23.4221 11.0168C23.4221 9.28895 24.8283 7.88263 26.5562 7.88263C28.2848 7.88263 29.6909 9.28881 29.6909 11.0168C29.6909 12.7453 28.2848 14.1516 26.5562 14.1516ZM26.5562 9.86319C25.9206 9.86319 25.4032 10.3806 25.4032 11.0168C25.4032 11.653 25.9206 12.1705 26.5562 12.1705C27.1925 12.1705 27.7098 11.653 27.7098 11.0168C27.7098 10.3806 27.1925 9.86319 26.5562 9.86319Z" />
      </svg>,
        title : "Web Design",
        description :"We specialize in designing and developing powerful websites that not only catches attention but also brings money in your account. If you want a professional hassle-free and eye-catching website like our clients then Contact Us.",
        f1_desc : "Advance Animations",
        f2_desc : "Responsive Web Design"
    },
    {
        id : "2",
        icon :  <svg
        width={60}
        height={60}
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1453_763)">
          <path d="M25.2665 33.04C24.8998 33.04 24.5998 33.34 24.5998 33.7067V46.3734H20.6665C20.2998 46.3734 19.9998 46.6734 19.9998 47.04V53.7867C18.6665 54.0934 17.6665 55.28 17.6665 56.7067C17.6665 58.36 19.0132 59.7067 20.6665 59.7067C22.3198 59.7067 23.6665 58.36 23.6665 56.7067C23.6665 55.28 22.6665 54.0934 21.3332 53.7867V47.7067H25.2665C25.6332 47.7067 25.9332 47.4067 25.9332 47.04V33.7067C25.9332 33.34 25.6332 33.04 25.2665 33.04ZM22.3332 56.7067C22.3332 57.1487 22.1576 57.5727 21.845 57.8852C21.5325 58.1978 21.1085 58.3734 20.6665 58.3734C20.2245 58.3734 19.8006 58.1978 19.488 57.8852C19.1754 57.5727 18.9998 57.1487 18.9998 56.7067C18.9998 56.2647 19.1754 55.8408 19.488 55.5282C19.8006 55.2156 20.2245 55.04 20.6665 55.04C21.1085 55.04 21.5325 55.2156 21.845 55.5282C22.1576 55.8408 22.3332 56.2647 22.3332 56.7067Z" />
          <path d="M12 53.7867V43.7067H20.6667C21.0333 43.7067 21.3333 43.4067 21.3333 43.04V33.7067C21.3333 33.34 21.0333 33.04 20.6667 33.04C20.3 33.04 20 33.34 20 33.7067V42.3734H5.92C5.61333 41.04 4.42667 40.04 3 40.04C1.34667 40.04 0 41.3867 0 43.04C0 44.6934 1.34667 46.04 3 46.04C4.42667 46.04 5.61333 45.04 5.92 43.7067H10.6667V53.7867C9.33333 54.0934 8.33333 55.28 8.33333 56.7067C8.33333 58.36 9.68 59.7067 11.3333 59.7067C12.9867 59.7067 14.3333 58.36 14.3333 56.7067C14.3333 55.28 13.3333 54.0934 12 53.7867ZM3 44.7067C2.55797 44.7067 2.13405 44.5311 1.82149 44.2186C1.50893 43.906 1.33333 43.4821 1.33333 43.04C1.33333 42.598 1.50893 42.1741 1.82149 41.8615C2.13405 41.549 2.55797 41.3734 3 41.3734C3.44203 41.3734 3.86595 41.549 4.17851 41.8615C4.49107 42.1741 4.66667 42.598 4.66667 43.04C4.66667 43.4821 4.49107 43.906 4.17851 44.2186C3.86595 44.5311 3.44203 44.7067 3 44.7067ZM11.3333 58.3734C10.8913 58.3734 10.4674 58.1978 10.1548 57.8852C9.84226 57.5727 9.66667 57.1487 9.66667 56.7067C9.66667 56.2647 9.84226 55.8408 10.1548 55.5282C10.4674 55.2156 10.8913 55.04 11.3333 55.04C11.7754 55.04 12.1993 55.2156 12.5118 55.5282C12.8244 55.8408 13 56.2647 13 56.7067C13 57.1487 12.8244 57.5727 12.5118 57.8852C12.1993 58.1978 11.7754 58.3734 11.3333 58.3734Z" />
          <path d="M57.0003 40.04C55.5737 40.04 54.387 41.04 54.0803 42.3733H47.3337V38.3733H49.907C55.4737 38.3733 60.0003 33.8867 60.0003 28.3733C60.0003 24.3 57.527 20.8 53.9937 19.24C53.9203 9.68 45.967 1 36.9003 1C31.0137 1 25.5203 4.04 22.407 8.96667C20.8438 7.71712 18.9015 7.03756 16.9003 7.04C11.827 7.04 8.03366 12.3867 8.00033 17.0933C3.72033 18.6667 0.666992 22.6733 0.666992 27.3733C0.666992 33.1533 5.28033 37.8933 11.1203 38.3333C11.187 38.36 11.2603 38.3733 11.3337 38.3733H16.027C16.3937 38.3733 16.6937 38.0733 16.6937 37.7067C16.6937 37.34 16.3937 37.04 16.027 37.04H12.0003C6.48699 37.04 2.00033 32.7067 2.00033 27.3733C2.00033 22.04 6.48699 17.7067 12.0003 17.7067C12.367 17.7067 12.667 17.4067 12.667 17.04C12.667 16.6733 12.367 16.3733 12.0003 16.3733C11.087 16.3733 10.207 16.4867 9.35366 16.6867C9.59366 11.96 13.4403 8.37333 16.9003 8.37333C18.8937 8.37333 20.7737 9.14667 22.1937 10.5533C22.4537 10.8133 22.8803 10.8133 23.1337 10.5533C23.2803 10.4067 23.3337 10.2067 23.3137 10.02C26.147 5.28 31.3337 2.34 36.8937 2.34C45.1003 2.34 52.3137 10.1067 52.647 18.7667C51.7737 18.52 50.8537 18.38 49.9003 18.38C49.5337 18.38 49.2337 18.68 49.2337 19.0467C49.2337 19.4133 49.5337 19.7133 49.9003 19.7133C54.7337 19.7133 58.6603 23.6 58.6603 28.38C58.6603 33.16 54.727 37.0467 49.9003 37.0467H43.9937C43.627 37.0467 43.327 37.3467 43.327 37.7133C43.327 38.08 43.627 38.38 43.9937 38.38H45.9937V43.0467C45.9937 43.4133 46.2937 43.7133 46.6603 43.7133H54.0737C54.3803 45.0467 55.567 46.0467 56.9937 46.0467C58.647 46.0467 59.9937 44.7 59.9937 43.0467C59.9937 41.3933 58.647 40.0467 56.9937 40.0467L57.0003 40.04ZM57.0003 44.7067C56.5583 44.7067 56.1344 44.5311 55.8218 44.2185C55.5093 43.906 55.3337 43.482 55.3337 43.04C55.3337 42.598 55.5093 42.174 55.8218 41.8615C56.1344 41.5489 56.5583 41.3733 57.0003 41.3733C57.4424 41.3733 57.8663 41.5489 58.1788 41.8615C58.4914 42.174 58.667 42.598 58.667 43.04C58.667 43.482 58.4914 43.906 58.1788 44.2185C57.8663 44.5311 57.4424 44.7067 57.0003 44.7067Z" />
          <path d="M30.6667 53.7867V33.7067C30.6667 33.34 30.3667 33.04 30 33.04C29.6333 33.04 29.3333 33.34 29.3333 33.7067V53.7867C28 54.0934 27 55.28 27 56.7067C27 58.36 28.3467 59.7067 30 59.7067C31.6533 59.7067 33 58.36 33 56.7067C33 55.28 32 54.0934 30.6667 53.7867ZM30 58.3734C29.558 58.3734 29.134 58.1978 28.8215 57.8852C28.5089 57.5727 28.3333 57.1487 28.3333 56.7067C28.3333 56.2647 28.5089 55.8408 28.8215 55.5282C29.134 55.2156 29.558 55.04 30 55.04C30.442 55.04 30.866 55.2156 31.1785 55.5282C31.4911 55.8408 31.6667 56.2647 31.6667 56.7067C31.6667 57.1487 31.4911 57.5727 31.1785 57.8852C30.866 58.1978 30.442 58.3734 30 58.3734ZM40 53.7867V49.7067C40 49.4667 39.8733 49.2467 39.6667 49.1267L35.3333 46.6534V33.7067C35.3333 33.34 35.0333 33.04 34.6667 33.04C34.3 33.04 34 33.34 34 33.7067V47.04C34 47.28 34.1267 47.5 34.3333 47.62L38.6667 50.0934V53.7867C37.3333 54.0934 36.3333 55.28 36.3333 56.7067C36.3333 58.36 37.68 59.7067 39.3333 59.7067C40.9867 59.7067 42.3333 58.36 42.3333 56.7067C42.3333 55.28 41.3333 54.0934 40 53.7867ZM39.3333 58.3734C38.8913 58.3734 38.4674 58.1978 38.1548 57.8852C37.8423 57.5727 37.6667 57.1487 37.6667 56.7067C37.6667 56.2647 37.8423 55.8408 38.1548 55.5282C38.4674 55.2156 38.8913 55.04 39.3333 55.04C39.7754 55.04 40.1993 55.2156 40.5118 55.5282C40.8244 55.8408 41 56.2647 41 56.7067C41 57.1487 40.8244 57.5727 40.5118 57.8852C40.1993 58.1978 39.7754 58.3734 39.3333 58.3734Z" />
          <path d="M49.3332 53.7867V49.5667C49.3332 49.3133 49.1865 49.08 48.9598 48.9667L39.9998 44.62V33.7067C39.9998 33.34 39.6998 33.04 39.3332 33.04C38.9665 33.04 38.6665 33.34 38.6665 33.7067V45.04C38.6665 45.2933 38.8132 45.5267 39.0398 45.64L47.9998 49.9867V53.7867C46.6665 54.0933 45.6665 55.28 45.6665 56.7067C45.6665 58.36 47.0132 59.7067 48.6665 59.7067C50.3198 59.7067 51.6665 58.36 51.6665 56.7067C51.6665 55.28 50.6665 54.0933 49.3332 53.7867ZM48.6665 58.3733C48.2245 58.3733 47.8006 58.1977 47.488 57.8852C47.1754 57.5726 46.9998 57.1487 46.9998 56.7067C46.9998 56.2646 47.1754 55.8407 47.488 55.5282C47.8006 55.2156 48.2245 55.04 48.6665 55.04C49.1085 55.04 49.5325 55.2156 49.845 55.5282C50.1576 55.8407 50.3332 56.2646 50.3332 56.7067C50.3332 57.1487 50.1576 57.5726 49.845 57.8852C49.5325 58.1977 49.1085 58.3733 48.6665 58.3733ZM20.6665 19.7067C21.7665 19.7067 22.6665 18.8067 22.6665 17.7067V15.7067C22.6665 14.6067 21.7665 13.7067 20.6665 13.7067C19.5665 13.7067 18.6665 14.6067 18.6665 15.7067V17.7067C18.6665 18.8067 19.5665 19.7067 20.6665 19.7067ZM19.9998 15.7067C19.9998 15.34 20.2998 15.04 20.6665 15.04C21.0332 15.04 21.3332 15.34 21.3332 15.7067V17.7067C21.3332 18.0733 21.0332 18.3733 20.6665 18.3733C20.2998 18.3733 19.9998 18.0733 19.9998 17.7067V15.7067ZM18.6665 25.04C18.6665 26.14 19.5665 27.04 20.6665 27.04C21.7665 27.04 22.6665 26.14 22.6665 25.04V23.04C22.6665 21.94 21.7665 21.04 20.6665 21.04C19.5665 21.04 18.6665 21.94 18.6665 23.04V25.04ZM19.9998 23.04C19.9998 22.6733 20.2998 22.3733 20.6665 22.3733C21.0332 22.3733 21.3332 22.6733 21.3332 23.04V25.04C21.3332 25.4067 21.0332 25.7067 20.6665 25.7067C20.2998 25.7067 19.9998 25.4067 19.9998 25.04V23.04ZM27.9998 23.04V25.04C27.9998 26.14 28.8998 27.04 29.9998 27.04C31.0998 27.04 31.9998 26.14 31.9998 25.04V23.04C31.9998 21.94 31.0998 21.04 29.9998 21.04C28.8998 21.04 27.9998 21.94 27.9998 23.04ZM30.6665 23.04V25.04C30.6665 25.4067 30.3665 25.7067 29.9998 25.7067C29.6332 25.7067 29.3332 25.4067 29.3332 25.04V23.04C29.3332 22.6733 29.6332 22.3733 29.9998 22.3733C30.3665 22.3733 30.6665 22.6733 30.6665 23.04ZM37.3332 23.04V25.04C37.3332 26.14 38.2332 27.04 39.3332 27.04C40.4332 27.04 41.3332 26.14 41.3332 25.04V23.04C41.3332 21.94 40.4332 21.04 39.3332 21.04C38.2332 21.04 37.3332 21.94 37.3332 23.04ZM39.9998 23.04V25.04C39.9998 25.4067 39.6998 25.7067 39.3332 25.7067C38.9665 25.7067 38.6665 25.4067 38.6665 25.04V23.04C38.6665 22.6733 38.9665 22.3733 39.3332 22.3733C39.6998 22.3733 39.9998 22.6733 39.9998 23.04ZM27.3332 13.7067C26.2332 13.7067 25.3332 14.6067 25.3332 15.7067V17.7067C25.3332 18.8067 26.2332 19.7067 27.3332 19.7067C28.4332 19.7067 29.3332 18.8067 29.3332 17.7067V15.7067C29.3332 14.6067 28.4332 13.7067 27.3332 13.7067ZM27.9998 17.7067C27.9998 18.0733 27.6998 18.3733 27.3332 18.3733C26.9665 18.3733 26.6665 18.0733 26.6665 17.7067V15.7067C26.6665 15.34 26.9665 15.04 27.3332 15.04C27.6998 15.04 27.9998 15.34 27.9998 15.7067V17.7067ZM37.3332 13.7067C36.2332 13.7067 35.3332 14.6067 35.3332 15.7067V17.7067C35.3332 18.8067 36.2332 19.7067 37.3332 19.7067C38.4332 19.7067 39.3332 18.8067 39.3332 17.7067V15.7067C39.3332 14.6067 38.4332 13.7067 37.3332 13.7067ZM37.9998 17.7067C37.9998 18.0733 37.6998 18.3733 37.3332 18.3733C36.9665 18.3733 36.6665 18.0733 36.6665 17.7067V15.7067C36.6665 15.34 36.9665 15.04 37.3332 15.04C37.6998 15.04 37.9998 15.34 37.9998 15.7067V17.7067ZM23.9998 19.7333C24.3665 19.7333 24.6665 19.4333 24.6665 19.0667V14.3733C24.6665 14.0067 24.3665 13.7067 23.9998 13.7067C23.6332 13.7067 23.3332 14.0067 23.3332 14.3733V19.0667C23.3332 19.4333 23.6332 19.7333 23.9998 19.7333ZM23.3332 26.3733C23.3332 26.74 23.6332 27.04 23.9998 27.04C24.3665 27.04 24.6665 26.74 24.6665 26.3733V21.68C24.6665 21.3133 24.3665 21.0133 23.9998 21.0133C23.6332 21.0133 23.3332 21.3133 23.3332 21.68V26.3733ZM27.3332 26.4V21.7067C27.3332 21.34 27.0332 21.04 26.6665 21.04C26.2998 21.04 25.9998 21.34 25.9998 21.7067V26.4C25.9998 26.7667 26.2998 27.0667 26.6665 27.0667C27.0332 27.0667 27.3332 26.7667 27.3332 26.4ZM33.9998 21.68C33.9998 21.3133 33.6998 21.0133 33.3332 21.0133C32.9665 21.0133 32.6665 21.3133 32.6665 21.68V26.3733C32.6665 26.74 32.9665 27.04 33.3332 27.04C33.6998 27.04 33.9998 26.74 33.9998 26.3733V21.68ZM35.3332 26.4C35.3332 26.7667 35.6332 27.0667 35.9998 27.0667C36.3665 27.0667 36.6665 26.7667 36.6665 26.4V21.7067C36.6665 21.34 36.3665 21.04 35.9998 21.04C35.6332 21.04 35.3332 21.34 35.3332 21.7067V26.4ZM31.3332 19.0667V14.3733C31.3332 14.0067 31.0332 13.7067 30.6665 13.7067C30.2998 13.7067 29.9998 14.0067 29.9998 14.3733V19.0667C29.9998 19.4333 30.2998 19.7333 30.6665 19.7333C31.0332 19.7333 31.3332 19.4333 31.3332 19.0667ZM41.3332 19.0667V14.3733C41.3332 14.0067 41.0332 13.7067 40.6665 13.7067C40.2998 13.7067 39.9998 14.0067 39.9998 14.3733V19.0667C39.9998 19.4333 40.2998 19.7333 40.6665 19.7333C41.0332 19.7333 41.3332 19.4333 41.3332 19.0667ZM33.3332 19.7333C33.6998 19.7333 33.9998 19.4333 33.9998 19.0667V14.3733C33.9998 14.0067 33.6998 13.7067 33.3332 13.7067C32.9665 13.7067 32.6665 14.0067 32.6665 14.3733V19.0667C32.6665 19.4333 32.9665 19.7333 33.3332 19.7333Z" />
        </g>
      </svg> ,
        title : "Web Development",
        description :"We not only excel in crafting static websites but dynamic websites too. Whether you are just starting out or been in theinsustry for long; you the the important of having a Smooth-running website. Our focus is on delivering the website of ur desire without any technical glitch. ",
        f1_desc : "Latest Technologies",
        f2_desc : " Custom features"
    },
    {
        id : "3",
        icon :  <img
        height={60}
        width={60}
        src="new-assets/software-development-logo.png"
        alt=""
      />,
        title : "App Development",
        description :"Whether you'r a startup looking to launch its first app or a large enterprise seeking to enhance its mobile presence, our agency is equipped to deliver exceptional app development services that drive innovation, engagement, and business growth.",
        f1_desc : "Andriod Applications",
        f2_desc : "iOS Applications"
    },
    {
        id : "4",
        icon : <img
        height={60}
        width={60}
        src="new-assets/graphic-design-logo.png"
        alt=""
      />,
        title : "Graphic Design",
        description :"Transforming ideas into visual masterpieces. Our graphic design services bring creativity, precision, and a touch of innovation . Elevate your brand with our professional design expertise.",
        f1_desc : "Creative Visual Solutions",
        f2_desc : " Tailored Design for Impact"
    },
    {
        id : "5",
        icon :   <img
        height={60}
        width={60}
        src="new-assets/copy-writting-logo.png"
        alt=""
      />,
        title : "Copy Writting",
        description :"Boost your sales with our copy writting services that perfectly blend with human emotions and the benefits of your services. Giving you instatnt credibility that people would trust.",
        f1_desc : "Website / Sales page copy",
        f2_desc : " Sales Funnel"
    },
    {
        id : "6",
        icon :<img
        height={60}
        width={60}
        src="new-assets/seo-logo.png"
        alt=""
      /> ,
        title : "SEO",
        description :"Boost your online visibility with our SEO services. We optimize websites to rank higher on search engines, driving targeted traffic to enhance your digital presence. Stay ahead in the digital landscape with our strategic SEO solutions.",
        f1_desc : "Global SEO",
        f2_desc : "Local SEO"
    }
]

export default data;