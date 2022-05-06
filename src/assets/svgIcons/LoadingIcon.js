import * as React from 'react';

const LoadingIcon = (props) => (
    <svg width={255} height={199} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M.255 117.293c-.403 1.411-.6 2.755 1.613 4.693 1.73 1.513 3.587.483 5.463 1.478 2.563 1.351 2.248 3.486 5.575 3.753 2.877.231 3.533-4.161 7.728-2.429 3.167 1.309 6.746.151 6.64-2.895-.107-3.046 3.08-3.603 1.156-6.589-1.96-3.038-5.168-.552-6.702-1.264-2.355-1.094-2.649-3.353-6.146-3.19-4.472.209-3.988 2.908-8.095 2.741-3.69-.148-6.541 1.279-7.232 3.702Z"
            fill="#fff"
        />
        <path
            d="M221.543 103.022c-6.606.451-12.919-.142-19.401-1.663-.994-.233-2.048-.545-2.723-1.41-1.019-1.31-.713-3.518.389-4.742 1.102-1.223 2.758-1.59 4.289-1.418.98.108 1.984.408 2.93.097 1.182-.388 1.964-1.62 2.757-2.693.793-1.073 1.865-2.131 3.085-1.965.915.126 1.637.912 2.451 1.404.814.492 1.997.543 2.463-.362 1-1.938-.403-7.25 4.744-7.25 7.428 0 6.213 5.347 7.108 6.481 1.349 1.72 3.769 1.341 5.731.76 1.963-.58 4.303-1.135 5.817.402 1.313 1.335 1.448 3.78 2.848 5 1.487 1.296 3.598.6 5.397.022 1.799-.578 4.124-.797 5.169.974.877 1.483.223 3.64-1.023 4.727-1.245 1.087-2.89 1.351-4.458 1.462-10.174.703-19.412-.39-27.573.174ZM70.564 11.01c4.785 0 14.617 8.497.565 9.859-14.05 1.361-35.095.734-43.611.762-13.9.047-17.348-.522-17.24-6.21.066-3.29 1.84-5.422 9.168-6.285 7.623-.9 3.73-9.388 13.035-9.13 7.926.219 8.734 11.33 15.986 8.607 7.253-2.723 5.733 4.699 11.037 6.06 5.83 1.497 6.278-3.664 11.06-3.664Z"
            fill="#fff"
        />
        <path
            opacity={0.16}
            d="M193.155 195.256c0 1.733-35.241 3.743-75.846 3.743-40.605 0-73.523-1.404-73.523-3.135 0-1.73 32.917-3.135 73.523-3.135 40.606 0 75.846.797 75.846 2.527Z"
            fill="#32323F"
        />
        <path d="M101.305 195.774c2.209-.005 3.996-1.818 3.99-4.049-.005-2.231-1.8-4.035-4.009-4.03-2.21.006-3.996 1.819-3.99 4.05.005 2.231 1.8 4.035 4.009 4.029Z" fill="#1F1F39" />
        <path d="M99.593 191.741a1.7 1.7 0 0 0 1.06 1.556 1.69 1.69 0 0 0 1.842-.381 1.707 1.707 0 0 0 .357-1.85 1.7 1.7 0 0 0-1.568-1.041 1.71 1.71 0 0 0-1.691 1.716Z" fill="#fff" />
        <path
            d="M125.94 127.966c-.811-9.503-2.471-17.263-6.784-18.398-4.313-1.135-8.004-.911-4.656.24 2.172.751 4.16 3.444 4.751 5.657 1.317 4.954.463 10.265.835 12.542.371 2.277 6.171 3.664 5.854-.041Z"
            fill="#E5E5E5"
        />
        <path d="M123.923 106.802c3.096.687 2.436 6.066-1.799 5.219-4.235-.847-19.359-3.406-21.674-3.868-2.314-.463-4.379-5.811 2.736-4.93 7.115.881 20.737 3.579 20.737 3.579Z" fill="#1F1F39" />
        <path d="M133.588 168.988h4.859v-19.695h-4.859v19.695Z" fill="#E5E5E5" />
        <path
            d="M90.2 119.875c-.137 2.148-.576 3.51 2.569 5.589.818.542 2.679 1.759 5.032 3.286l.765.495c.479.31.972.629 1.481.956a805.568 805.568 0 0 0 5.959 3.809l.676.428c4.841 3.058 9.354 5.812 10.666 6.32 1.175.45 3.046.357 4.668-.032a9.823 9.823 0 0 0 1.799-.609c1.339-.625 1.964-1.461.75-2.204-.357-.218-1.035-.629-1.949-1.188a899.898 899.898 0 0 1-13.937-8.687c-2.759-1.765-5.377-3.479-7.388-4.872l-.749-.527c-1.663-1.174-2.78-2.061-3.008-2.456-.58-1.01-2.46-1.63-4.172-1.703-1.626-.072-3.094.35-3.161 1.395Z"
            fill="#0267A4"
        />
        <path d="M139.509 146.663c.011 4.61.612 6.105-2.736 6.173-3.347.067-5.022-.047-5.086-1.664-.065-1.616-.012-5.149-.012-5.149l7.834.64Z" fill="#3F3F54" />
        <path
            d="M145.477 143.756c-.357 1.931-.883 4.278-10.898 4.089-10.016-.189-10.136-6.154-10.136-6.154l7.67-.451 12.465.397.899 2.119ZM138.238 148.086c4.548 1.164 6.963 1.79 8.881 1.323 1.917-.467 9.476-2.433 9.479-.901 0 .883-7.309 2.899-9.866 2.728-2.557-.171-9.097-2.183-9.097-2.183l.603-.967Z"
            fill="#1F1F39"
        />
        <path
            d="M92.457 119.458c.534 1.157 3.298 3.361 6.896 5.82l.749.512a171.966 171.966 0 0 0 7.46 4.712l.685.408c5.19 3.074 9.999 5.587 11.443 5.868.779.15-.879 2.175 1.568 3.591.238.136.486.256.742.357.652.25 1.327.438 2.015.562a127.05 127.05 0 0 0 14.051 1.879c2.848.224 5.369.324 7.431.363a99.61 99.61 0 0 0 4.511-.013c.99-.027 1.529-.062 1.529-.062l24.982-47.777 5.063-7.471.063.488c-.3-.13-1.317.108-1.616-.026l1.578-.978c-12.625-5.637-27.254-14.111-33.166-8.306-2.826 2.778-9.122 27.88-15.415 37.426-1.387 2.102-2.807 3.891-4.238 5.145-1.096.959-2.198 1.607-3.298 1.849a4.204 4.204 0 0 1-1.627.048 121.68 121.68 0 0 1-3.861-.737c-2.279-.467-4.882-1.037-7.557-1.617l-.792-.171c-2.973-.642-6.005-1.285-8.759-1.801-.3-.057-.61-.114-.912-.168-3.88-.709-7.102-1.128-8.645-.878-.781.126-1.129.435-.88.977Z"
            fill="#1F1F39"
        />
        <path
            d="M115.654 138.763c-.666 3.453 15.591 5.686 33.237 7.356 3.624.342 7.204-2.73 10.616-7.235a66.24 66.24 0 0 0 2.675-3.847c3.346-5.176 6.488-11.277 9.294-16.26 4.347-7.724 13.567-28.58 10.446-30.902a2.57 2.57 0 0 0-.882-.391 5.6 5.6 0 0 0-2.079-.196c-2.806.3-14.412 33.309-23.145 45.068a46.383 46.383 0 0 1-2.764 3.409c-2.578 2.852-5.04 4.543-7.281 4.218-7.677-1.106-19.907-3.753-26.168-3.22-2.24.186-3.714.782-3.949 2Z"
            fill="#1F1F39"
        />
        <path
            d="M90.2 119.875c-.137 2.148-.576 3.51 2.569 5.589.818.542 2.679 1.759 5.032 3.286l.765.495c.479.31.972.629 1.481.956a805.568 805.568 0 0 0 5.959 3.809l.676.428c4.841 3.058 9.354 5.812 10.666 6.32 1.175.45 3.046.357 4.668-.032a9.823 9.823 0 0 0 1.799-.609c1.339-.625 1.964-1.461.75-2.204-.357-.218-1.035-.629-1.949-1.188a899.898 899.898 0 0 1-13.937-8.687c-2.759-1.765-5.377-3.479-7.388-4.872l-.749-.527c-1.663-1.174-2.78-2.061-3.008-2.456-.58-1.01-2.46-1.63-4.172-1.703-1.626-.072-3.094.35-3.161 1.395Z"
            fill="#1F1F39"
        />
        <path
            opacity={0.27}
            d="M181.922 87.871a2.568 2.568 0 0 0-.882-.391 5.599 5.599 0 0 0-2.079-.196c-2.806.3-14.412 33.309-23.144 45.068a46.645 46.645 0 0 1-2.765 3.409c-2.578 2.852-5.04 4.543-7.281 4.218-6.596-.95-16.539-3.035-23.184-3.266a895.44 895.44 0 0 1-13.911-8.675c-2.759-1.766-5.377-3.48-7.388-4.873-.261-.182-.51-.358-.749-.527-1.663-1.174-2.78-2.061-3.008-2.456-.58-1.01-2.46-1.63-4.172-1.702-1.62-.069-3.088.353-3.148 1.397-.138 2.149-.577 3.51 2.568 5.589.819.542 2.68 1.76 5.033 3.286l.764.496c.48.31.973.629 1.482.956.773.5 1.577 1.016 2.398 1.54 1.171.751 2.37 1.515 3.56 2.268l.677.428c4.542 2.869 8.796 5.472 10.387 6.201 4.284 2.422 17.605 4.133 31.826 5.475 3.625.342 7.204-2.729 10.616-7.234a66.933 66.933 0 0 0 2.675-3.847c3.346-5.176 6.488-11.277 9.294-16.261 4.334-7.725 13.552-28.58 10.431-30.903Z"
            fill="#fff"
        />
        <path
            d="M99.657 186.642c0 1.875 9.16-.032 18.508-1.952 4.079-.837 8.194-1.678 11.602-2.208 2.418-.377 4.479-.6 5.92-.551 2.28.075 6.242.637 10.757 1.362 1.715.274 3.513.573 5.326.878 10.424 1.746 21.438 3.67 21.256 2.364-.289-2.135-30.282-11.805-37.357-11.787-6.991.017-36.015 10.257-36.012 11.894Z"
            fill="#2C2C44"
        />
        <path d="M117.703 196.772c2.209-.005 3.996-1.818 3.99-4.049-.005-2.231-1.8-4.035-4.009-4.03-2.209.006-3.996 1.819-3.99 4.05.005 2.231 1.8 4.035 4.009 4.029Z" fill="#1F1F39" />
        <path d="M117.704 194.439a1.704 1.704 0 0 0 1.691-1.716 1.703 1.703 0 0 0-1.701-1.706 1.703 1.703 0 0 0-1.69 1.716 1.702 1.702 0 0 0 1.7 1.706Z" fill="#fff" />
        <path d="M154.756 196.698c2.209-.005 3.996-1.818 3.99-4.049-.005-2.231-1.8-4.035-4.009-4.03-2.209.006-3.996 1.818-3.99 4.05.005 2.231 1.8 4.035 4.009 4.029Z" fill="#1F1F39" />
        <path d="M154.76 194.362a1.705 1.705 0 0 0 1.691-1.716 1.703 1.703 0 0 0-1.7-1.707 1.705 1.705 0 0 0-1.691 1.716 1.703 1.703 0 0 0 1.7 1.707Z" fill="#fff" />
        <path d="M169.892 195.778c2.209-.005 3.995-1.818 3.99-4.049-.006-2.231-1.801-4.035-4.01-4.03-2.209.006-3.995 1.819-3.989 4.05.005 2.231 1.8 4.035 4.009 4.029Z" fill="#1F1F39" />
        <path
            d="M168.178 191.751a1.702 1.702 0 0 0 1.06 1.556 1.699 1.699 0 0 0 1.842-.381c.236-.239.395-.542.458-.871a1.692 1.692 0 0 0-.727-1.737 1.697 1.697 0 0 0-.942-.283 1.704 1.704 0 0 0-1.691 1.716Z"
            fill="#fff"
        />
        <path
            d="M118.165 184.688c4.079-.837 8.194-1.678 11.602-2.208l3.872-1.44s1.36-5.692-.928-5.585c-2.207.103-9.315 4.62-14.546 9.233ZM146.444 183.289c1.715.275 3.513.574 5.326.878-3.951-4.494-13.222-9.403-13.413-8.28-.14.835 5.022 5.009 8.087 7.402Z"
            fill="#17172D"
        />
        <path d="M138.356 175.889c10.767 4.902 15.93 12.887 13.902 12.956-3.978.134-16.573-6.916-16.573-6.916l2.671-6.04Z" fill="#2C2C44" />
        <path d="M133.242 175.9c-10.653 4.028-17.311 12.592-15.282 12.651 3.978.115 17.725-6.622 17.725-6.622l-2.443-6.029Z" fill="#2C2C44" />
        <path d="M139.328 161.533c.093 1.663.015 17.937.055 21.289.027 2.269-7.426 1.062-7.422-.124.008-1.618.216-19.487.263-21.147.046-1.66 7.013-1.678 7.104-.018Z" fill="#1F1F39" />
        <path
            d="M191.416 26.88c.436-1.378 2.019-3.708 2.257-5.145.239-1.436-3.371-2.774-5.167-1.937-1.796.836-2.65 2.083-2.468 3.77.183 1.688-.12 4.546-.12 4.546l3.534 1.834 1.964-3.068Z"
            fill="#EFAEA6"
        />
        <path
            d="M171.317 20.985c-1.469.104-3.488.188-4.143.215a.33.33 0 0 0-.3.216c-.376 1.091-.081 2.142.21 2.489a.311.311 0 0 0 .247.104c.985-.024 3.315-.07 4.189-.086a.314.314 0 0 0 .315-.335l-.176-2.315a.32.32 0 0 0-.342-.288Z"
            fill="#1F1F39"
        />
        <path d="M170.734 20.763c-.634 1.363.054 2.861.351 3.603.513.052 37.561-.482 40.572-.731 1.854-2.593.749-6.104-.627-6.442-26.916 2.563-39.032 2.5-40.296 3.57Z" fill="#603A3E" />
        <path d="M209.399 20.504c.031 1.54.664 2.778 1.414 2.765.749-.014 1.331-1.27 1.301-2.81-.03-1.54-.664-2.778-1.414-2.766-.749.012-1.333 1.272-1.301 2.81Z" fill="#FDFFFD" />
        <path
            opacity={0.14}
            d="m192.408 19.166-.064.287c-.726 3.235-1.288 4.535-2.823 4.824-1.579.3-4.338-.719-4.298-3.053-1.68-1.48 1.761-.724.917-1.7 3.697-.685 3.667.122 4.735-.073l.078-.015.054-.009h.034l.059-.01 1.308-.251Z"
            fill="#1F1F39"
        />
        <path
            d="M185.622 18.782c.545-.285 2.839-2.401 4.816-1.267 1.977 1.135 1.807 1.637 1.657 2.605-.15.968-1.673 3.697-3.738 3.658-2.064-.039-2.445-2.435-2.747-2.961-.512-.894-.534-1.754.012-2.035ZM151.493 38.59l-4.475-4.09c1.149-2.427 2.528-8.756 3.974-10.718 1.589-2.154 1.736-1.923 1.736-1.923l2.532 3.982 1.2 1.875s-.678.854-1.08 2.66c-.28 1.264-.427 2.99-.112 5.217.228 1.665-3.775 2.998-3.775 2.998Z"
            fill="#EFAEA6"
        />
        <path opacity={0.14} d="M156.452 27.715a9.74 9.74 0 0 0-1.136 2.934c-3.977-.133-4.659-3.566-3.384-4.078.798-.32 3.328-.731 3.328-.731l1.192 1.875Z" fill="#1F1F39" />
        <path d="M161.023 20.614c-.3 1.927.866 6.037-.406 5.724-1.273-.314-.63 4.072-1.997 3.787-3.312-.69-6.589-3.691-6.629-5.383-.041-1.692 1.261-6.072 1.261-6.072l7.771 1.944Z" fill="#EFAEA6" />
        <path
            d="M157.199 21.606c1.007.374.98.627 1.799.45.818-.177-.203-1.483 1.199-1.378 1.401.105 2.916.384 3.431-1.133.75-2.195-1.323-2.329-2.614-2.368-.831-.023-.61-1.79-2.207-2.101-1.253-.243-1.283.516-2.41.348-.681-.1-1.717-1.516-2.951-.965-2.287 1.02-1.121 3.242-3.109 4.443-2.319 1.4 1.059 6.41 1.676 6.054.721-.415.323-2.552 1.024-2.852 1.059-.462.985.328 1.565 1.218.618.95 2.085 1.35 1.489-.335-.597-1.686.198-1.719 1.108-1.381Z"
            fill="#1F1F39"
        />
        <path d="M119.339 117.596c2.291.94 8.321 2.57 8.321 2.57l2.113-6.201-9.08-2.367-4.1 3.284 2.746 2.714Z" fill="#EFAEA6" />
        <path d="M80.685 114.595c2.248 1.035 8.209 2.914 8.209 2.914l2.365-6.11-8.973-2.741-4.234 3.112 2.633 2.825Z" fill="#fff" />
        <path
            d="M81.497 115.418c-.099.699-.6.192-1.658.049-2.418-.328-5.636 7.677-6.311 8.809-.35.584-3.985.314-2.75-2.79 1.07-2.686 4.463-11.298 5.654-14.23a1.452 1.452 0 0 1 1.532-.901c2.337.311 5.582 1.76 5.33 2.608-.094 1.399-1.385 3.544-1.797 6.455Z"
            fill="#1F1F39"
        />
        <path d="M96.526 112.687c2.248 1.034 8.207 2.914 8.207 2.914l2.366-6.11-8.974-2.741-4.232 3.112 2.633 2.825Z" fill="#fff" />
        <path
            d="M97.337 113.512c-.1.699-.6.192-1.658.049-2.417-.329-5.637 7.677-6.311 8.809-.348.584-3.985.314-2.748-2.791 1.069-2.685 4.462-11.299 5.651-14.229a1.453 1.453 0 0 1 1.532-.901c2.337.311 5.585 1.76 5.331 2.608-.091 1.399-1.385 3.542-1.797 6.455Z"
            fill="#1F1F39"
        />
        <path
            d="m150.117 77.598-5.322-2.573s-11.423-.012-17.506.566c-2.125.202-3.598.472-3.711.843-.685 2.287-1.284 4.884-1.821 7.655-2.129 11.017-2.468 22.522-3.154 29.247-7.584-3.569-14.751-6.842-15.451-6.305-1.317.996-2.014 1.302-2.786 5.537a61.66 61.66 0 0 0-.277 1.667c-5.757-2.503-11.275-5.19-13.72-5.92-.465-.616-2.004 3.092-3.166 8.498 0 0 30.507 19.815 41.615 13.21.22-.131.432-.273.637-.426.413.208.824.414 1.234.617 9.933 4.904 19.404 8.256 21.887 4.772 6.526-9.183 4.89-46.698 1.541-57.388Zm-12.846 43.861c-.123.267-1.74-.323-4.214-1.398-.632-.276-1.319-.582-2.054-.915l.102-.288c2.432-6.975 3.748-13.979 6.175-20.7.08.137 1.987 18.931-.009 23.301Z"
            fill="#3B3B4C"
        />
        <path
            d="m89.1 73.123 1.725-1.288 1.011-.75c.059-.042.113-.087.167-.134a2.63 2.63 0 0 0 .814-1.201 1.352 1.352 0 0 0-.15-1.22l-.622-.847-.096-.13-2.603-3.49a1.148 1.148 0 0 0-.49-.378c-.6-.253-1.469-.1-2.203.45l-1.05.781-1.683 1.254.652.878 1.69-1.26.24-.178c.542-.406 1.182-.524 1.632-.342a.875.875 0 0 1 .38.288l2.291 3.077.192.26c.382.515.102 1.372-.628 1.915l-.209.15-1.71 1.276-.01.01.66.88Z"
            fill="#201B2C"
        />
        <path
            d="M96.5 63.957c-.881.928-.402.976-1.393 2.356-.99 1.38-1.887 3.892-2.615 3.392-.729-.5-.372-1.627-.476-2.073-.103-.446-.262.892-1.192.997-.929.105-2.615-1.264-2.737-2.402-.121-1.138.438-2.456 1.68-3.519 1.24-1.062 3.464-1.832 4.122-2.157.658-.324 2.611 3.406 2.611 3.406Z"
            fill="#EEADA5"
        />
        <path
            d="m90.825 71.835 1.011-.751c.059-.042.113-.087.167-.134.382-.314.668-.73.824-1.2a1.354 1.354 0 0 0-.15-1.225l-.632-.843-.018-.025-.05-.063-.235.315-.316.426-.405.542c.382.517.099 1.374-.628 1.919l-.218.162-1.712 1.274.653.879 1.709-1.276Z"
            fill="#201B2C"
        />
        <path
            d="m95.754 84.335-12.52 9.445a1.682 1.682 0 0 1-2.356-.332l-.03-.04-17.09-22.127c-1.898-2.522-.108-3.846.634-4.406l11.544-9.264c.742-.56 3.37-1.136 4.86.901l14.971 19.87.562.751c1.228 1.64 1.104 3.935-.575 5.202Z"
            fill="#603A3E"
        />
        <path
            d="m95.754 84.335-12.52 9.446a1.682 1.682 0 0 1-2.356-.332l-.03-.04c.546-.817 1.592-1.865 3.532-3.137 4.692-3.076 8.79-8.182 11.38-11.887l.562.75c1.235 1.638 1.11 3.933-.568 5.2Z"
            fill="#775155"
        />
        <path opacity={0.28} d="M121.757 84.085c.535-2.766 1.138-5.363 1.823-7.655.111-.373 1.585-.644 3.707-.844l11.125 2.624c-2.533 5.616-11.221 5.554-16.655 5.876Z" fill="#1F1F39" />
        <path
            d="M147.362 29.883c2.325-.283 2.924 2.625 4.729 2.969 1.096.209 1.191-.796 1.769-1.272.356-.3.922.032 1.799.215 2.28.48-3.298 46-3.298 46s-6.606.978-11.243.264c-4.637-.715-11.867-3.387-11.477-4.993.39-1.606 13.073-41.384 13.073-41.384s2.318-1.517 4.648-1.8Z"
            fill="#fff"
        />
        <path
            d="M143.776 52.38c.956 7.224-4.055 13.332-4.611 16.866-.552 3.49-.611 8.767-4.038 10.295-3.426 1.528-10.219.48-11.666.925-1.756.537-5.096-.958-3.456-4.112 1.332-2.552 8.726-11.304 9.927-16.336.281-1.178.449-2.164.466-2.837.009-.572 0-1.163-.012-1.753-.071-2.657-.346-5.317-.243-6.447v-.011c.008-.12.028-.237.06-.353 0-.012.007-.024.01-.033-1.094.441-12.706.45-18.567 4.095-7.844 5.672-12.836 12.16-14.692 12.39-2.272-1.437-3.747-3.593-4.393-5.253 0-.008 10.87-9.79 15.677-13.772 4.506-3.733 15.357-7.421 23.422-10.712 5.436-2.219 15.303-5.45 15.303-5.45-.069 2.581-4.385 13.451-3.187 22.499Z"
            fill="#0267A4"
        />
        <path
            opacity={0.28}
            d="m130.204 48.618-.069.47c-.076 1.186.183 3.762.252 6.338.015.59.021 1.18.012 1.753-.012.671-.184 1.652-.466 2.836-.234.979-.253 2.124-.555 3.282.159-.169.072-.406.24-.63.9-1.2 5.232-11.408 5.316-14.01-.001.005-1.755-.381-4.73-.039Z"
            fill="#1F1F39"
        />
        <path
            opacity={0.18}
            d="M151.157 34.161c-.214-.196-3.35 4.152-6.838 5.203a8.162 8.162 0 0 1-2.988.341c-.63-.05-10.494-3.217-11.573-3.517 3.286-1.587 2.89-.982 4.601-1.78 2.548 1.265 5.546 2.205 7.11 2.275a11.221 11.221 0 0 0 3.344-.378c2.002-.52 3.786-1.482 5.157-2.345.7-.441.918-1.244 1.663-1.159.989.113-.201 1.612-.476 1.36Z"
            fill="#1F1F39"
        />
        <path
            d="M152.794 33.428c.042-.47-.168-1.273-1.155-1.387-.75-.085-.85.206-1.551.647-2.098 1.324-5.171 2.876-8.504 2.725-3.332-.152-10.147-5.622-15.162-5.319-5.014.303-7.163 4.433-14.337 4.462-7.175.028-14.242-4.097-16.367-4.062-2.126.034-3.448.3-3.517 1.12-.07.822.75 2.343 2.106 3.153 1.357.81 14.011 3.657 17.457 3.726 5.625.113 11.131-4.133 14.73-3.903 3.599.23 10.755 3.43 14.952 3.843 4.682.46 9.295-4.367 9.57-4.115.276.253.527.496 1.146.439.424-.04.596-.859.632-1.329Z"
            fill="#F4AD00"
        />
        <path
            d="M191.859 27.689c-.749 1.38-4.061 26.391-10.402 27.354-5.247.795-16.887-6.155-20.617-4.403-.967.45-4.095 10.808-4.089 13.732 0 3.085-1.64 20.03-4.769 18.747-3.307-1.351-8.713 1.14-9.356-.66-.6-1.672 9.103-16.179 10.308-23.87 1.205-7.69 1.886-9.329 2.398-18.013l.234-8.732c8.337 1.459 19.259 14.01 23.386 12.91 2.186-1.731 5.962-18.364 6.332-18.807.955-1.157 7.334.362 6.575 1.742Z"
            fill="#0267A4"
        />
        <path
            opacity={0.62}
            d="M133.057 120.061c-.782 3.866-5.397 9.094-6.368 10.154a67.56 67.56 0 0 1-1.234-.617 7.134 7.134 0 0 1-.637.426c-.009-.13.111-.3.429-.531a4.88 4.88 0 0 1 .259-.171c1.909-1.174 5.07-9.186 5.452-10.196l.038-.099s.039-.064.109-.17l-.102.289c.735.333 1.421.645 2.054.915ZM118.603 113.335c-1.06 3.286-1.292 4.68-2.916 4.758-1.623.078-15.192-3.62-15.598-3.857.094-.615.187-1.169.277-1.668.031.009.062.02.09.035.774.387 12.293 3.562 13.686 3.019 1.392-.544 3.323-2.788 3.323-2.788l1.138.501Z"
            fill="#1F1F39"
        />
        <path
            d="M150.418 141.88c-.856-10.007-2.602-18.173-7.143-19.365-4.541-1.192-8.428-.959-4.903.252 2.287.788 4.38 3.625 5.002 5.957 1.387 5.209.489 10.808.879 13.21.389 2.401 6.498 3.847 6.165-.054Z"
            fill="#E5E5E5"
        />
        <path d="M148.294 119.596c3.259.723 2.565 6.387-1.892 5.496-4.457-.892-20.388-3.587-22.824-4.075-2.436-.487-4.609-6.118 2.883-5.189 7.493.929 21.833 3.768 21.833 3.768Z" fill="#1F1F39" />
        <path opacity={0.69} d="m58.792 146.324 32.927.649M23.278 149.545l76.997.216M35.018 152.352l49.341.397" stroke="#231F20" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
        <path opacity={0.69} d="m83.199 41.53 17.74.648M64.064 44.75l41.483.216M70.389 47.557l26.583.397" stroke="#231F20" strokeWidth={3.67} strokeLinecap="round" strokeLinejoin="round" />
        <path opacity={0.69} d="m65.259 157.532-16.714-.399" stroke="#231F20" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default LoadingIcon;