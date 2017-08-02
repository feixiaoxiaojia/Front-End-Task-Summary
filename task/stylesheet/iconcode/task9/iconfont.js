;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-rili" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M711.3062 290.6972c24.2821 0 45.3765-19.7069 45.3765-44.032V46.560255999999995c0-24.3251-21.0954-44.0535-45.3765-44.0535-24.3026 0-43.988 19.7284-43.988 44.0535v200.10496C667.3183 270.9903 687.0036 290.6972 711.3062 290.6972zM623.4808 113.4203H400.764928v66.51392h222.71590400000002V113.420288zM884.053 113.4203h-82.774016v66.14528h85.940224c25.2785 0 46.6115 21.376 46.6115 46.677v153.92768H90.43865600000001v-153.92768c0-25.3 21.333-46.677 46.6115-46.677h86.503424V113.420288h-82.642944c-64.086 0-116.5076 52.5087-116.5076 116.7032v676.8015359999999c0 64.1741 50.4914 116.6807 114.5774 116.6807H884.052992c64.0625 0 116.5066-52.5066 116.5066-116.6807V230.12351999999998C1000.5596 165.929 948.1144 113.4203 884.053 113.4203zM933.8296 910.3514c0 25.3-21.333 46.676-46.6115 46.676H137.05011199999998c-25.2785 0-46.6115-21.376-46.6115-46.676V446.445568H933.829632V910.35136zM267.1084 646.1819c36.8773 0 66.7525-29.9397 66.7525-66.8815 0-36.9224-29.8752-66.8611-66.7525-66.8611-36.8548 0-66.7525 29.9397-66.7525 66.8611C200.3558 616.2422 230.2525 646.1819 267.1084 646.1819zM511.5484 646.1819c36.8558 0 66.7525-29.9397 66.7525-66.8815 0-36.9224-29.8957-66.8611-66.7525-66.8611-36.8773 0-66.7525 29.9397-66.7525 66.8611C444.7959 616.2422 474.6711 646.1819 511.5484 646.1819zM265.9164 890.709c36.8773 0 66.7515-29.9397 66.7515-66.8611 0-36.9428-29.8742-66.8826-66.7515-66.8826-36.8558 0-66.7525 29.9397-66.7525 66.8826C199.1639 860.7693 229.0596 890.709 265.9164 890.709zM511.5484 890.709c36.8558 0 66.7525-29.9397 66.7525-66.8611 0-36.9428-29.8957-66.8826-66.7525-66.8826-36.8773 0-66.7525 29.9397-66.7525 66.8826C444.7959 860.7693 474.6711 890.709 511.5484 890.709zM755.6413 646.1819c36.8568 0 66.7535-29.9397 66.7535-66.8815 0-36.9224-29.8967-66.8611-66.7535-66.8611-36.8773 0-66.7525 29.9397-66.7525 66.8611C688.8899 616.2422 718.764 646.1819 755.6413 646.1819zM311.7036 290.6972c24.2811 0 45.3765-19.7069 45.3765-44.032V46.560255999999995c0-24.3251-21.0944-44.0535-45.3765-44.0535-24.3016 0-43.989 19.7284-43.989 44.0535v200.10496C267.7146 270.9903 287.402 290.6972 311.7036 290.6972z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shoucang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 84.517929c-9.573029 0-19.145036 7.357572-26.40744 22.071691l-94.694709 191.872982c-14.523785 29.42824-52.979632 57.368592-85.456301 62.087057l-211.743542 30.768771c-32.476669 4.719488-39.821961 27.322275-16.320711 50.228985l153.219637 149.352563c23.500227 22.907733 38.188764 68.11433 32.641421 100.460016l-36.170804 210.888058c-4.021593 23.445992 4.971222 37.235043 21.288862 37.235043 6.194072 0 13.447267-1.989307 21.439288-6.191003l189.389418-99.567693c14.523785-7.634888 33.669844-11.453866 52.81488-11.453866s38.291095 3.818979 52.81488 11.453866l189.389418 99.567693c7.994068 4.202719 15.244192 6.191003 21.439288 6.191003 16.314571 0 25.309432-13.791098 21.288862-37.235043L760.761644 691.358971c-5.547343-32.345686 9.141194-77.552284 32.641421-100.460016l153.219637-149.352563c23.50125-22.906709 16.155958-45.51052-16.320711-50.228985l-211.743542-30.768771c-32.476669-4.719488-70.932516-32.658817-85.456301-62.087057L538.40744 106.58962C531.145036 91.8755 521.573029 84.517929 512 84.517929L512 84.517929z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M687.513386 822.536592c-27.500331 16.234753-62.953797 13.768585-86.561471-9.852392L351.021655 562.746778c-28.002774-28.002774-28.002774-73.401754 0-101.411691l249.930259-249.923096c23.606651-23.62814 59.060117-26.095331 86.561471-9.860579-5.098111 3.01159-10.462283 5.478781-14.836917 9.860579L422.724721 461.334064c-27.995611 28.009937-27.995611 73.408917 0 101.411691l249.951749 249.937422C677.05008 817.064974 682.414251 819.525002 687.513386 822.536592z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconcardshare" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M448.984615 567.138462l126.030769 0 0-315.076923 189.046154 0-252.061538-252.061538-252.061538 252.061538 189.046154 0L448.984615 567.138462zM638.030769 441.107692l0 97.169723 288.547446 107.630277L512 800.547446l-414.578215-154.639754L385.969231 538.277415 385.969231 441.107692l-378.092308 141.784615 0 252.061538 504.123077 189.046154 504.123077-189.046154 0-252.061538L638.030769 441.107692z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-czjl" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M47.545 994.792c-1.474 14.49 12.584 25.132 26.067 19.236 16.108-7.047 167.51-73.238 238.016-104.086l-235.427-173.731c-8.844 78.416-27.36 245.747-28.655 258.582zM99.102 669.587l270.303 199.473 435.117-591.338-270.303-199.473-435.117 591.338zM402.663 771.518l-29.122-21.465 21.465-29.159 29.122 21.465-21.465 29.159zM736.641 317.595l-300.289 408.114-29.122-21.465 300.289-408.114 29.122 21.465zM830.302 155.407l-187.105-138.1c-22.975-16.934-55.297-12.045-72.231 10.966l-15.317 20.817 270.303 199.473 15.317-20.817c16.934-23.011 12.010-55.369-10.929-72.338zM369.299 1014.819h610.358v-43.899h-610.358v43.899zM530.769 760.155v43.899h448.887v-43.899h-448.887z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-qian-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M761.111423 174.855641l-93.468629 0-105.094129 193.64278c-28.027453 52.477735-45.170139 87.360315-51.429275 104.647743l-1.789193 0c-18.489142-42.038138-70.660367-141.465474-156.52462-298.290523L253.971802 174.855641l183.804041 315.732421L287.065189 490.588063l0 69.763945 176.648484 0 0 96.151811L287.065189 656.503819l0 70.65915 176.648484 0 0 139.977926 87.65223 0L551.365903 727.162969l170.388131 0L721.754034 656.503819 551.367119 656.503819l0-96.151811 170.388131 0 0-69.763945-146.237062 0L761.111423 174.855641z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wenjian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M870.899066 232.475725l-94.291526 0c-1.904373 0-3.787256 0.097214-5.644557 0.287549L486.678288 232.763274l0-50.587142c0-30.786167-24.993231-55.799864-55.799864-55.799864L150.711514 126.376269c-30.81482 0-55.799864 25.012673-55.799864 55.799864l0 158.894893 0 2.496867 681.694867 0 13.331633 0 30.407544 0 50.553373 0 55.546084 0 0-54.921867-0.016373 0c0.002047-0.208754 0.016373-0.414439 0.016373-0.624217l0 0C926.444127 257.472026 901.44885 232.475725 870.899066 232.475725z"  ></path>' +
    '' +
    '<path d="M157.098991 384.760061l-62.411445 0 0 62.411445 0 385.80281c0 34.325783 28.084639 62.411445 62.411445 62.411445l706.934714 0c34.325783 0 62.411445-28.084639 62.411445-62.411445L926.44515 447.170482l0-62.411445-62.411445 0L157.098991 384.759037z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantouxiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M376.4992 212.3008 340.3008 248.4992 603.8016 512 340.3008 775.5008 376.4992 811.6992 676.1984 512Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wenjianjia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M659.8656 731.7504c-21.7088 0-39.1168-17.6128-39.1168-39.3216l0-98.0992c0-21.7088 17.6128-39.3216 39.1168-39.3216l303.3088 0c2.2528 0 4.3008 0.2048 6.5536 0.4096L969.728 212.1728c0-27.0336-21.9136-48.9472-48.9472-48.9472l-174.08 0-46.6944-98.0992L121.6512 313.344l696.7296 0-63.6928-133.9392 153.1904 0c21.7088 0 39.1168 17.6128 39.1168 39.3216l0 88.2688c0 9.0112-7.3728 16.384-16.384 16.384L98.7136 323.3792c-27.0336 0-48.9472-21.9136-48.9472-48.9472l0-45.6704c0-27.0336 21.9136-48.9472 48.9472-48.9472l182.6816 0-167.1168 131.4816L595.968 99.328 501.5552 6.144l-199.2704 156.8768L75.776 163.0208c-39.7312 0-71.68 32.1536-71.68 71.8848l0 702.8736C4.096 977.5104 36.2496 1009.664 75.776 1009.664l861.184 0c18.0224 0 32.5632-14.5408 32.5632-32.768L969.5232 731.3408c-2.048 0.2048-4.3008 0.4096-6.5536 0.4096L659.8656 731.7504zM963.1744 565.0432 663.1424 565.0432c-18.0224 0-32.5632 14.5408-32.5632 32.768l0 91.5456c0 18.0224 14.5408 32.768 32.5632 32.768l300.2368 0c32.3584 0 58.7776-26.4192 58.7776-58.7776l0-39.3216C1021.952 591.4624 995.7376 565.0432 963.1744 565.0432z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-3" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M102.4 921.6 102.4 256l665.6 0 0 665.6L102.4 921.6zM716.8 307.2 153.6 307.2l0 230.4 563.2 0L716.8 307.2zM716.8 588.8 153.6 588.8l0 281.6 563.2 0L716.8 588.8zM307.2 460.8l-51.2 0 0-51.2 51.2 0L307.2 460.8zM409.6 460.8l-51.2 0 0-51.2 51.2 0L409.6 460.8zM614.4 460.8l-153.6 0 0-51.2 153.6 0L614.4 460.8z"  ></path>' +
    '' +
    '<path d="M307.2 102.4 307.2 153.6 870.4 153.6 870.4 716.8 921.6 716.8 921.6 102.4Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ku" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M510.525 481.894L54.518 267.1c-3.973-1.884-4.014-7.577-0.041-9.462L506.88 41.288a5.408 5.408 0 0 1 4.506 0l451.379 214.835c3.932 1.884 3.973 7.537 0 9.42L515.03 481.895c-1.393 0.656-3.072 0.697-4.506 0z"  ></path>' +
    '' +
    '<path d="M510.525 481.894L54.518 267.1c-3.973-1.884-4.014-7.577-0.041-9.462L506.88 41.288a5.408 5.408 0 0 1 4.506 0l451.379 214.835c3.932 1.884 3.973 7.537 0 9.42L515.03 481.895c-1.393 0.656-3.072 0.697-4.506 0zM880.64 724.5l84.664 40.182c3.973 1.884 3.973 7.537 0.041 9.421L514.703 992.379c-1.433 0.696-3.072 0.737-4.505 0.04L51.938 777.135c-3.974-1.884-3.974-7.537 0-9.462l84.54-40.55 88.433-44.032 286.843 125.747L796.836 683.09l83.804 41.41z"  ></path>' +
    '' +
    '<path d="M880.64 724.5l84.664 40.182c3.973 1.884 3.973 7.537 0.041 9.421L514.703 992.379c-1.433 0.696-3.072 0.737-4.505 0.04L51.938 777.135c-3.974-1.884-3.974-7.537 0-9.462l84.54-40.55 88.433-44.032 286.843 125.747L796.836 683.09l83.804 41.41z"  ></path>' +
    '' +
    '<path d="M880.64 467.026l84.664 40.223c3.973 1.884 3.973 7.495 0.041 9.42L514.703 734.945a5.12 5.12 0 0 1-4.505 0L51.938 519.66c-3.974-1.885-3.974-7.537 0-9.462l84.54-40.51 87.532-44.974 281.477 131.318a14.896 14.896 0 0 0 12.534 0L798.68 424.714l81.961 42.312z"  ></path>' +
    '' +
    '<path d="M880.64 467.026l84.664 40.223c3.973 1.884 3.973 7.495 0.041 9.42L514.703 734.945a5.12 5.12 0 0 1-4.505 0L51.938 519.66c-3.974-1.885-3.974-7.537 0-9.462l84.54-40.51 87.532-44.974 281.477 131.318a14.896 14.896 0 0 0 12.534 0L798.68 424.714l81.961 42.312z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-denglu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M503.808 272.554667m-256 0a150 150 0 1 0 512 0 150 150 0 1 0-512 0Z"  ></path>' +
    '' +
    '<path d="M642.048 588.288l-276.48 0c-158.378667 0-287.914667 129.536-287.914667 287.914667 0 5.973333 0.170667 12.117333 0.512 18.090667 0.170667 3.072 0.512 6.144 0.682667 9.216 0.341333 2.730667 0.682667 5.12 1.706667 7.68 2.56 5.632 6.656 10.410667 10.24 15.530667 3.925333 5.461333 8.362667 10.581333 12.970667 15.36 9.045333 9.216 19.456 17.237333 30.72 23.722667 11.434667 6.656 23.552 11.605333 36.352 14.848 11.605333 3.072 23.722667 4.437333 35.84 4.437333 0 0 604.330667 0 604.330667 0 9.386667 0 18.773333-0.853333 27.989333-2.730667 9.045333-1.706667 17.92-4.437333 26.453333-8.021333 8.362667-3.413333 16.384-7.68 24.064-12.629333 7.509333-4.949333 14.677333-10.581333 21.162667-16.725333 10.24-9.728 15.189333-17.92 17.066667-32.085333 0.682667-5.632 1.365333-11.434667 1.706667-17.066667 0.512-6.485333 0.682667-13.141333 0.682667-19.626667C930.133333 717.824 800.426667 588.288 642.048 588.288z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wenjian1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M820 64H204c-30.9 0-56 25.1-56 56v784c0 30.9 25.1 56 56 56h411.2c14.9 0 29.1-5.9 39.6-16.4l204.8-204.8c10.5-10.5 16.4-24.7 16.4-39.5V120c0-30.9-25.1-56-56-56zM652 867.2V764c0-15.5 12.5-28 28-28h103.2L652 867.2zM820 680H652c-30.9 0-56 25.1-56 56v168H232c-15.5 0-28-12.5-28-28V148c0-15.5 12.5-28 28-28h560c15.5 0 28 12.5 28 28v532z" fill="#1E315B" ></path>' +
    '' +
    '<path d="M680 232H344c-15.5 0-28 12.5-28 28s12.5 28 28 28h336c15.5 0 28-12.5 28-28s-12.5-28-28-28zM680 400H344c-15.5 0-28 12.5-28 28s12.5 28 28 28h336c15.5 0 28-12.5 28-28s-12.5-28-28-28zM680 568H344c-15.5 0-28 12.5-28 28s12.5 28 28 28h336c15.5 0 28-12.5 28-28s-12.5-28-28-28z" fill="#1E315B" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo_sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M872.834 819.031l-0.021-0.020v0.020h0.021c6.611 7.724 9.929 16.273 9.929 25.645 0 10.485-3.728 19.446-11.186 26.902-6.683 6.903-16.034 11.188-26.387 11.188-0.189 0-0.376-0.002-0.564-0.006-4.4 0-8.664-0.7-12.804-2.079-6.214-2.076-11.451-5.687-15.438-10.387l0.112 0.893-204.607-206.068c-49.128 34.771-104.085 52.135-164.831 52.135-6.077 0-12.277-0.268-18.622-0.803-12.503-1.101-23.947-3.154-35.015-6.127-34.433-2.314-79.83-21.736-117.236-50.923-22.673-13.314-53.59-46.129-76.785-86.976-18.876-31.629-31.618-69.022-35.597-108.993 2.099 24.518-2.324-3.171-2.664-31.839 0.219 9.819 0.022 3.726 0.022-2.411 0-17.23 1.554-34.097 4.529-50.469 7.223-45.086 25.601-86.609 52.198-121.533 13.217-24.748 55.417-62.558 105.78-85.633-26.24 10.779 0.95-4.114 31.044-14.598 27.503-9.971 59.247-15.738 92.338-15.738 0.003 0 0.006 0 0.007 0 13.266 0 25.953 0.824 38.128 2.493 32.566 4.409 63.753 14.337 93.58 29.785 48.239 25.143 87.102 62.529 113.335 108.106-9.518-21.469 10.215 10.521 23.749 47.495 13.533 36.974 19.486 74.485 17.818 112.552-2.204 63.464-24.018 120.564-65.441 171.319l205.41 206.068h-0.803zM690.599 440.818c0.21-3.697 0.33-8.022 0.33-12.373 0-31.328-6.205-61.208-17.456-88.475-13.231-34.958-34.583-65.86-61.735-90.484 21.143 20.301 6.93 4.997-9.343-8.537-30.272-25.39-67.305-43.731-107.998-51.99 25.734 4.367-9.068-3.862-45.794-3.862-9.87 0-19.603 0.595-29.162 1.749-1.639-0.081-4.336 0.248-6.931 0.839l-4.358 0.695c-44.686 7.108-84.078 25.889-116.086 53.095-23.983 14.957-55.634 55.983-72.075 104.063-2.047-6.829-13.232 30.701-15.189 72.084-1.936 41.383 5.645 79.738 22.782 115.043 20.889 45.873 54.812 82.768 97.015 106.791-0.152 5.549 43.151 25.628 90.828 31.684 1.539 3.059 37.155 4.997 73.039-1.081 30.977-5.587 58.609-16.326 83.316-31.388 8.622-1.65 39.887-25.597 64.428-55.302-9.505 15.858 17.567-17.681 35.063-56.467-25.001 44.533-14.64 28.672-6.36 11.575v0.021c15.865-30.484 25.376-66.489 25.885-104.668z" fill="#cdcdcd" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-right-arrow" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M822.45 330.019c16.234 27.5 13.769 62.954-9.853 86.561l-249.937 249.93c-28.003 28.003-73.402 28.003-101.412 0l-249.923-249.93c-23.628-23.607-26.095-59.060-9.861-86.561 3.012 5.098 5.479 10.462 9.861 14.837l249.923 249.952c28.010 27.996 73.41 27.996 101.412 0l249.938-249.952c4.381-4.375 6.841-9.738 9.852-14.837z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)