import * as React from "react"
import Svg, {
  Defs,
  ClipPath,
  Path,
  LinearGradient,
  Stop,
  Mask,
  G,
  Image
} from "react-native-svg"

const SvgComponent = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 327.22824 149.14157"
      height={149.14157}
      width={327.22824}
      xmlSpace="preserve"
      {...props}
    >
      <Defs>
        <ClipPath id="a" clipPathUnits="userSpaceOnUse">
          <Path d="M-1.274 118.218H41.6v677.657H-1.275z" />
        </ClipPath>
        <ClipPath id="b" clipPathUnits="userSpaceOnUse">
          <Path d="M0 0h42.874v677.658H0z" clipRule="evenodd" />
        </ClipPath>
        <LinearGradient
          id="c"
          spreadMethod="pad"
          gradientUnits="userSpaceOnUse"
          y2={-37.16}
          x2={22.780001}
          y1={121.69}
          x1={22.77}
        >
          <Stop offset={0} stopOpacity={1} stopColor="#fff" />
          <Stop offset={1} stopOpacity={0} stopColor="#fff" />
        </LinearGradient>
        <Mask height={1} width={1} y={0} x={0} maskUnits="userSpaceOnUse">
          <G clipPath="url(#a)">
            <G clipPath="url(#b)" transform="translate(-1.274 118.218)">
              <Path
                d="M0 0h42.874v677.658H0z"
                fill="url(#c)"
                fillRule="evenodd"
                stroke="none"
              />
            </G>
          </G>
        </Mask>
        <ClipPath clipPathUnits="userSpaceOnUse">
          <Path d="M0 792h612V0H0z" clipRule="evenodd" />
        </ClipPath>
        <ClipPath clipPathUnits="userSpaceOnUse">
          <Path
            d="M98.128 444.473h279.236v145.703H98.128z"
            clipRule="evenodd"
          />
        </ClipPath>
        <Mask height={1} width={1} y={0} x={0} maskUnits="userSpaceOnUse">
          <Image
            xlinkHref="data:image/png;base64,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"
            preserveAspectRatio="none"
            height={1}
            width={1}
            imageRendering="optimizeSpeed"
          />
        </Mask>
        <ClipPath clipPathUnits="userSpaceOnUse">
          <Path
            d="M390.028 535.657h108.081v56.299H390.028z"
            clipRule="evenodd"
          />
        </ClipPath>
        <Mask height={1} width={1} y={0} x={0} maskUnits="userSpaceOnUse">
          <Image
            xlinkHref="data:image/png;base64,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"
            preserveAspectRatio="none"
            height={1}
            width={1}
            imageRendering="optimizeSpeed"
          />
        </Mask>
      </Defs>
      <Path
        d="M-4051.457 1220.094c0 345.802 170.158 626.13 380.059 626.13 209.903 0 380.06-280.328 380.06-626.13s-170.158-626.13-380.06-626.13c-209.901 0-380.06 280.328-380.06 626.13z"
        transform="matrix(1.33333 0 0 -1.33333 -239.467 788.02) translate(-524.406 -3.92) matrix(0 -.14174 .19154 0 593.02 18.624)"
        fill="#e22f3e"
        fillOpacity={1}
        fillRule="evenodd"
        stroke="#fff33e"
        strokeWidth={29.04459953}
        strokeLinecap="butt"
        strokeLinejoin="round"
        strokeMiterlimit={22.92558479}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M1713.426 2625.618a8.301 8.301 0 008.303-8.302 8.301 8.301 0 00-8.303-8.302 8.3 8.3 0 00-8.301 8.302 8.301 8.301 0 008.301 8.302z"
        transform="matrix(1.33333 0 0 -1.33333 -239.467 788.02) translate(-524.406 -3.92) translate(593.02 18.624) scale(.19154)"
        fill="none"
        stroke="#fff33e"
        strokeWidth={1.41729999}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={22.92558479}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M327.445 500.473v1.678h.745c.15 0 .263-.015.34-.045a.374.374 0 00.187-.16.477.477 0 00.07-.252c0-.12-.039-.22-.116-.301-.077-.082-.196-.134-.357-.156a.572.572 0 00.134-.084 1.12 1.12 0 00.184-.223l.29-.457h-.277l-.222.349a3.177 3.177 0 01-.16.232.51.51 0 01-.113.112.341.341 0 01-.101.044.694.694 0 01-.124.008h-.257v-.745zm.223.938h.477c.102 0 .18.01.238.031.057.021.1.054.13.1.03.047.044.097.044.151 0 .08-.028.146-.086.197-.057.05-.148.076-.272.076h-.53z"
        transform="matrix(1.33333 0 0 -1.33333 -239.467 788.02) translate(-524.406 -3.92) translate(593.02 18.624)"
        fill="#fff33e"
        fillOpacity={1}
        fillRule="nonzero"
        stroke="none"
      />
      <Path
        d="M911.8 2701.98c-.326 1.344-.856 5.092-1.548 11.202-.651 5.091-1.223 9.328-1.67 12.667a90.139 90.139 0 00-3.056-11.934c-1.302-3.992-2.973-8.024-4.968-12.179l-45.702-93.114-45.701 95.028c-1.915 3.911-3.584 7.658-4.97 11.325-1.385 3.665-2.607 7.29-3.625 10.874a106.503 106.503 0 00-.896-11.527c-.53-4.032-1.304-8.227-2.322-12.586l-18.736-86.026h-26.151l41.303 182.074 51.567-110.264c.774-1.71 1.995-4.643 3.624-8.676 1.63-4.072 3.585-9.083 5.907-15.03 1.67 5.01 4.317 11.365 7.901 19.063.939 2.077 1.671 3.666 2.12 4.766l50.384 110.14 42.24-182.073h-26.394zm60.914-86.27v174.74h97.514v-24.194h-69.164v-43.745h69.164v-24.929h-69.164v-56.456h69.164v-25.416zm150.933 100.201h5.174c15.03 0 25.01 1.751 29.938 5.254 4.928 3.503 7.413 9.695 7.413 18.615 0 9.614-2.648 16.374-7.943 20.326-5.295 3.951-15.112 5.906-29.408 5.906h-5.174zm-1.71-21.996v-78.205h-26.638v174.74h39.591c11.61 0 20.61-.774 27.046-2.28 6.395-1.507 11.853-3.991 16.375-7.495 5.416-4.235 9.572-9.693 12.545-16.374 2.933-6.68 4.398-13.97 4.398-21.955 0-13.97-3.38-24.928-10.142-32.87-6.761-7.902-16.74-12.668-29.938-14.257l60.12-79.51h-32.014l-58.166 78.206z"
        transform="matrix(1.33333 0 0 -1.33333 -239.467 788.02) translate(-524.406 -3.92) translate(593.02 18.624) scale(.19154)"
        fill="#393738"
        fillOpacity={1}
        fillRule="nonzero"
        stroke="#393738"
        strokeWidth={4.88520002}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={22.92558479}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M904.51 2705.5c-.326 1.344-.856 5.09-1.549 11.201-.65 5.091-1.22 9.327-1.669 12.667a90.324 90.324 0 00-3.055-11.934c-1.303-3.991-2.973-8.024-4.97-12.178l-45.701-93.114-45.701 95.027c-1.916 3.91-3.585 7.659-4.97 11.323-1.385 3.668-2.606 7.292-3.624 10.876a106.458 106.458 0 00-.897-11.527c-.53-4.033-1.304-8.227-2.322-12.585l-18.736-86.027h-26.151l41.302 182.072 51.568-110.262c.774-1.71 1.996-4.642 3.625-8.675 1.63-4.073 3.585-9.084 5.906-15.03 1.67 5.009 4.318 11.364 7.903 19.063.936 2.076 1.669 3.666 2.117 4.765l50.387 110.14 42.239-182.073h-26.395zm60.914-86.271v174.74h97.514v-24.194h-69.164v-43.747h69.164V2701.1h-69.164v-56.454h69.164v-25.417zm150.934 100.202h5.173c15.03 0 25.01 1.75 29.938 5.253 4.928 3.503 7.413 9.694 7.413 18.615 0 9.612-2.648 16.374-7.943 20.326-5.295 3.95-15.112 5.905-29.408 5.905h-5.173zm-1.71-21.997v-78.205h-26.64v174.74h39.592c11.609 0 20.61-.773 27.046-2.28 6.395-1.508 11.853-3.991 16.374-7.494 5.418-4.237 9.572-9.695 12.546-16.374 2.933-6.681 4.4-13.973 4.4-21.956 0-13.97-3.382-24.928-10.144-32.87-6.76-7.902-16.74-12.669-29.938-14.257l60.122-79.509h-32.016l-58.167 78.205z"
        transform="matrix(1.33333 0 0 -1.33333 -239.467 788.02) translate(-524.406 -3.92) translate(593.02 18.624) scale(.19154)"
        fill="#fefefe"
        fillOpacity={1}
        fillRule="nonzero"
        stroke="#fefefe"
        strokeWidth={4.88520002}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={22.92558479}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M870.57 532.39h9.33l-3.433 7.63a29.08 29.08 0 00-.616 1.676c-.21.632-.43 1.334-.64 2.114a26.004 26.004 0 00-.585-2.043 27.32 27.32 0 00-.624-1.748zm15.04-13.154l-3.791 8.613h-13.263l-3.885-8.613h-5.71l16.203 34.779 16.188-34.78zM900.124 538.427h.99c2.88 0 4.79.336 5.735 1.007.944.67 1.42 1.857 1.42 3.565 0 1.841-.507 3.136-1.522 3.893-1.014.757-2.894 1.131-5.632 1.131h-.991zm-.328-4.212v-14.98h-5.102v33.47h7.583c2.224 0 3.948-.149 5.18-.438 1.225-.288 2.27-.764 3.137-1.435 1.037-.811 1.833-1.857 2.402-3.136.562-1.28.843-2.676.843-4.205 0-2.676-.648-4.775-1.942-6.296-1.296-1.514-3.207-2.426-5.735-2.73l11.515-15.23h-6.132l-11.14 14.98z"
        transform="matrix(1.33333 0 0 -1.33333 -239.467 788.02) translate(-524.406 -3.92)"
        fill="#393738"
        fillOpacity={1}
        fillRule="nonzero"
        stroke="none"
      />
      <Path
        d="M277.55 513.765h9.33l-3.433 7.63a29.08 29.08 0 00-.616 1.678c-.21.631-.43 1.334-.64 2.114a26.004 26.004 0 00-.585-2.044 27.32 27.32 0 00-.624-1.748zm15.04-13.153l-3.79 8.613h-13.263l-3.885-8.613h-5.711l16.204 34.78 16.188-34.78zM307.104 519.804h.99c2.88 0 4.791.335 5.735 1.006s1.42 1.857 1.42 3.565c0 1.842-.507 3.137-1.522 3.893-1.014.757-2.894 1.132-5.632 1.132h-.99zm-.328-4.213v-14.979h-5.102v33.468h7.583c2.224 0 3.948-.148 5.18-.436 1.226-.289 2.27-.765 3.137-1.436 1.037-.811 1.833-1.857 2.403-3.136.561-1.28.842-2.676.842-4.205 0-2.676-.647-4.775-1.942-6.296-1.295-1.513-3.207-2.426-5.734-2.73l11.515-15.229h-6.133l-11.14 14.979z"
        transform="matrix(1.33333 0 0 -1.33333 -239.467 788.02) translate(-524.406 -3.92) translate(593.02 18.624)"
        fill="none"
        stroke="#393738"
        strokeWidth={0.93489999}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={22.92558479}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M868.99 532.93h9.33l-3.432 7.63a29.057 29.057 0 00-.617 1.677 37.72 37.72 0 00-.64 2.114 26.046 26.046 0 00-.584-2.044 27.32 27.32 0 00-.625-1.748zm15.041-13.154l-3.792 8.613h-13.262l-3.885-8.613h-5.71l16.203 34.78 16.188-34.78zM898.544 538.968h.991c2.879 0 4.79.335 5.734 1.006s1.42 1.857 1.42 3.565c0 1.842-.507 3.137-1.521 3.893-1.014.757-2.894 1.132-5.633 1.132h-.99zm-.327-4.213v-14.979h-5.102v33.468h7.583c2.223 0 3.947-.148 5.18-.436 1.225-.289 2.27-.765 3.136-1.436 1.038-.811 1.833-1.857 2.403-3.136.562-1.28.843-2.676.843-4.205 0-2.676-.648-4.775-1.943-6.296-1.295-1.513-3.207-2.426-5.734-2.73l11.515-15.229h-6.132l-11.14 14.979z"
        transform="matrix(1.33333 0 0 -1.33333 -239.467 788.02) translate(-524.406 -3.92)"
        fill="#fefefe"
        fillOpacity={1}
        fillRule="nonzero"
        stroke="none"
      />
      <Path
        d="M275.97 514.306h9.33l-3.432 7.63a29.057 29.057 0 00-.616 1.677 37.72 37.72 0 00-.64 2.114 26.046 26.046 0 00-.585-2.044 27.32 27.32 0 00-.624-1.747zm15.041-13.154l-3.791 8.613h-13.263l-3.885-8.613h-5.71l16.203 34.78 16.188-34.78zM305.525 520.344h.99c2.88 0 4.79.336 5.735 1.006.944.671 1.42 1.857 1.42 3.566 0 1.84-.508 3.136-1.522 3.892-1.014.757-2.894 1.132-5.633 1.132h-.99zm-.328-4.213v-14.979h-5.102v33.469h7.583c2.223 0 3.947-.149 5.18-.437 1.225-.289 2.27-.765 3.136-1.436 1.038-.81 1.834-1.856 2.403-3.136.562-1.28.843-2.676.843-4.205 0-2.676-.648-4.774-1.943-6.296-1.295-1.513-3.206-2.426-5.734-2.73l11.515-15.229h-6.132l-11.14 14.98z"
        transform="matrix(1.33333 0 0 -1.33333 -239.467 788.02) translate(-524.406 -3.92) translate(593.02 18.624)"
        fill="none"
        stroke="#fefefe"
        strokeWidth={0.93489999}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={22.92558479}
        strokeDasharray="none"
        strokeOpacity={1}
      />
      <Path
        d="M155.1 537.98h1.32l-.486 1.08a5.446 5.446 0 00-.178.537 3.624 3.624 0 00-.082-.289 3.914 3.914 0 00-.088-.247zm2.13-1.862l-.538 1.22h-1.878l-.55-1.22h-.808l2.294 4.925 2.293-4.925zM158.488 536.118v4.74h.769v-4.05h1.723v-.69zM164.23 538.544h1.875l.003-.136c.007-.154.01-.256.01-.31 0-.667-.191-1.185-.572-1.553-.382-.369-.92-.553-1.614-.553a2.95 2.95 0 00-1.039.171 2.204 2.204 0 00-.798.518 2.344 2.344 0 00-.516.807c-.12.308-.18.638-.18.99 0 .358.06.688.182.99.123.302.303.568.542.8.231.226.502.398.812.518.31.118.643.177.997.177a2.36 2.36 0 001-.204 2.23 2.23 0 00.788-.624l-.56-.424c-.16.185-.341.323-.542.414-.2.09-.424.136-.673.136-.514 0-.932-.165-1.257-.494-.325-.33-.487-.757-.487-1.283 0-.536.162-.97.487-1.302.325-.334.746-.5 1.264-.5.44 0 .786.102 1.038.306.253.206.38.484.38.839v.067h-1.14v.65zM170.985 538.477a1.8 1.8 0 01-.508 1.259 1.69 1.69 0 01-1.22.518c-.233 0-.455-.044-.666-.133a1.676 1.676 0 01-.561-.385 1.713 1.713 0 01-.376-.573 1.828 1.828 0 01-.13-.686 1.764 1.764 0 011.065-1.637c.21-.088.433-.132.668-.132a1.675 1.675 0 011.22.518 1.782 1.782 0 01.508 1.251zm.802 0c0-.337-.063-.655-.189-.954-.127-.3-.31-.568-.552-.803a2.56 2.56 0 00-1.789-.728c-.341 0-.666.063-.977.189-.31.127-.582.306-.82.539a2.397 2.397 0 00-.737 1.758 2.423 2.423 0 00.738 1.764c.241.235.516.414.822.537.306.122.63.184.974.184.34 0 .663-.062.969-.184a2.512 2.512 0 001.372-1.348c.126-.301.189-.619.189-.953"
        transform="matrix(1.33333 0 0 -1.33333 -239.467 788.02) translate(-524.406 -3.92) translate(593.02 18.624)"
        fill="#393738"
        fillOpacity={1}
        fillRule="nonzero"
        stroke="none"
      />
      <Path
        d="M154.833 538.2h1.321l-.485 1.08a5.203 5.203 0 00-.178.537 4.013 4.013 0 00-.171-.537zm2.13-1.862l-.537 1.22h-1.878l-.55-1.22h-.809l2.295 4.925 2.292-4.925zm1.258 0v4.74h.77v-4.051h1.723v-.69zm5.743 2.426h1.875l.003-.136c.006-.154.01-.256.01-.31 0-.667-.191-1.185-.572-1.553-.383-.369-.92-.553-1.614-.553-.39 0-.735.057-1.039.171a2.205 2.205 0 00-.799.518 2.34 2.34 0 00-.516.807c-.12.308-.18.638-.18.99 0 .358.061.688.183.99.122.302.302.568.542.8.23.226.502.398.812.517.31.119.643.178.997.178a2.36 2.36 0 001-.204c.294-.136.557-.344.788-.624l-.561-.424a1.56 1.56 0 01-.541.414c-.2.09-.425.136-.673.136-.514 0-.933-.165-1.258-.494-.324-.33-.487-.757-.487-1.283 0-.535.163-.97.487-1.302.325-.334.746-.5 1.264-.5.44 0 .787.102 1.04.306.252.206.378.484.378.839v.067h-1.14v.65zm6.755-.067a1.8 1.8 0 01-.508 1.259 1.684 1.684 0 01-1.22.518 1.686 1.686 0 01-1.227-.518 1.716 1.716 0 01-.376-.572 1.828 1.828 0 01-.13-.686 1.764 1.764 0 01.505-1.251 1.68 1.68 0 011.228-.52 1.673 1.673 0 011.22.519 1.775 1.775 0 01.508 1.251zm.802 0a2.43 2.43 0 00-.741-1.757 2.56 2.56 0 00-1.79-.728c-.34 0-.665.063-.976.189-.309.127-.582.306-.82.539a2.405 2.405 0 00-.737 1.758 2.433 2.433 0 00.738 1.764c.242.235.515.414.822.537.305.122.63.184.974.184.34 0 .663-.062.969-.184a2.498 2.498 0 001.372-1.348c.126-.302.189-.619.189-.953"
        transform="matrix(1.33333 0 0 -1.33333 -239.467 788.02) translate(-524.406 -3.92) translate(593.02 18.624)"
        fill="#fff33e"
        fillOpacity={1}
        fillRule="nonzero"
        stroke="none"
      />
      <G>
        <Path
          d="M666.912-265.274l-.872 1.143-.352.809-.7.589-.292.318-.365.353-.337.279-.713 1.09-1.284 1.012-.201.427-.06.461-.665.843-.612.284-.472.33-.558.622-1.634 1.779-.301.276-.113.336-.144.01-.718.932-.65.542-.042.132-.38.396-1.156.875-1.045 1.24-.203.47-.752.892-.958.263-.537.92-2.162 1.099-.816.982-.286.218-.38.41-.171.083-.145.01-.688 1.058-.284.176-.216.014-1.065.956-1.368.089-.302-.195-.35-.177-.598-.461-.66-.171-.278-.197-.13-.034-.055-.325-.6-.675-.644-.501-.152-.29-.438-.343-.745-.623-.778-1.164-.516-.209-.417-.73-.48-.183-.133-.234-.024-.213-.494-.64-.185-.359-.063-.166-.543-.38.01-.215-.137-.12-.322-.479-.372-.218-.09-.337-.617-.331-.35.065.005-.8-.448-.142.083-.205-1.333-1.3-.392-.06.045-.174.155-.21-.033-.084-.202-.243-4.282-4.45-.451-.3.638.609-1.121-1.47-.263-.24-.013.022-.647-.915-.025-.213-.239-.241-.134.052.047.254-.596.882.079 1.037.237.27.061.21.082.281.062.882 1.155 2.203-.041 1.525-.016.3.027.17.094.28.13.249.378.804.655.3.968 1.651.092.08-.004.072.571.52.282.567.208.144.167.245.3.224-.006.13.204.2.19.273.23.414.158.19.536.507.476.984.07.038.297.267 4.17 5.714.464.512.092.08.169.204.396.43.094.28.178.031.156.205.941.781.355.563.088.365-.131.466-.665.844-.677.13-.558.622-.286.218-.191.227-.546.379-.284.175-.414.37-.626.784-.072.005.008-.158-1.105 1.03-1.09.742-.274.432-.388.11-1.518 1.614-3.109 2.546-.634.713-1.258.739-.563.708-.157.267-.252.26 1.112-1.158-1.319 1.686-.988.85-1.227 1.294 1.03-.938.088.365-.058.433.307.308.562.006.446-.529.413.102.172-.097.508-.334.187-.14.435-.314.78-.051.567-.337.328-.107 2.82-1.098.854-.099.444-.486.976.094.405-.441 1.724-.027 1.515-.399.045-.16.496-.118.178.032.142.033.649-.3.099-.048.247.07.236.07 1.552-.187 3.873-.881 3.608-.15.533-.12.413.1 2.97.179 1.176.395.661.157.425-.114.195.159.59.176 2.24.854 1.83 1.18.856-.355.103.078.046-.202.08-.134.212-.185.772-.593.062-.505.75.28 1.396-.377.788-.437 1.125-.03-.093-.28-.056-.296-.18.011-1.306-1.129-.41-.173.01-.172-1.691-1.104.013-.258-4.31-2.262-1.52-.444-1.038-.061-.695-.212-.137-.12-1.097.158-.652-.115-.716.204-2.535.208-.007.129-1.152.075-1.368.547-1.26.082-.469.288-2.381.483-2.003.802-.954.191-.902.559-.707.003-.827.511-.18.012-.56.208-.655.385-.358-.02-.557.152-.94.36-.254.303-1.8.79-.662.085-.364.11-.134.05-.32-.064-.161-.118 1.02-.766.114-.136.292-.32.69-.416.736-.805.468-.274.149-.095.392-.197.298-.19.182-.299.736-.59.91-.731 1.003-.408.196-.342.189-.183.1-.093.183-.055.044-.16.39-.153 1.335-1.302.257-.346.54-.292 1.728-1.498 1.103.428 1.746.015 1.825-1.533 2.812-3.541.115-.136.183-.084.014-.258.955-.905.41-.527.113-.093.22-.343 3.958-4.658.437-.357.054-.347.388-.096.114-.137 2.755-3.107.287-.233.158-.297 1.83-2.09.1-.093.158-.267 4.893-5.877 2.223-2.988.537-.92.321-.193-.04-.626-.1-.15-.231-.157-.218.057-.701.846z"
          transform="matrix(1.33333 0 0 -1.33333 -239.467 788.02) translate(-524.406 -3.92) translate(593.02 18.624) matrix(.06804 .82852 -.85657 .06391 0 0)"
          fill="none"
          stroke="#393738"
          strokeWidth={0.87510002}
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit={22.92558479}
          strokeDasharray="none"
          strokeOpacity={1}
        />
        <Path
          d="M272.602 535.593l-1.038-.65-.717-.24-.552-.542-.292-.221-.328-.28-.261-.261-.982-.522-.955-.999-.38-.14-.398-.02-.768-.496-.284-.49-.315-.37-.571-.422-1.635-1.24-.257-.232-.296-.072-.017-.119-.848-.535-.509-.504-.115-.026-.366-.29-.828-.902-1.133-.786-.417-.139-.815-.565-.29-.777-.825-.386-1.088-1.721-.896-.614-.207-.223-.378-.288-.082-.137-.018-.119-.954-.502-.17-.224-.027-.178-.89-.822-.17-1.128.147-.262.127-.301.355-.525.101-.559.15-.242.02-.11.275-.066.537-.54.386-.566.238-.145.264-.384.482-.658.944-.719.144-.44.597-.392.124-.41.192-.125.18-.034.515-.45.295-.176.139-.063.288-.474.184-.005.093-.122.389-.297.162-.322.282-.097.242-.532-.08-.286.686-.047.091-.38.182.055 1.022-1.187.025-.329.152.026.19.115.07-.032.195-.183 3.52-3.833.226-.393-.478.569 1.183-1.023.188-.233-.02-.01.74-.595.18-.035.19-.212-.053-.108-.215.055-.795-.437-.884.131-.215.214-.176.064-.235.085-.75.109-1.81 1.098-1.308.062-.259.007-.143.034-.234.095-.204.124-.663.364-.212.562-1.349.907-.062.082h-.062l-.406.507-.467.27-.109.182-.2.154-.17.262-.111.003-.158.183-.221.174-.339.217-.152.143-.398.477-.81.457-.028.06-.208.264-4.611 3.82-.408.417-.062.081-.163.153-.342.356-.233.095-.015.15-.164.143-.605.83-.458.329-.307.097-.408-.08-.768-.497-.157-.552-.571-.422-.207-.224-.207-.143-.361-.428-.17-.224-.345-.32-.714-.468-.009-.06.136-.003-.957-.85-.71-.856-.39-.199-.12-.314-1.486-1.155-2.392-2.413-.654-.48-.719-.995-.644-.42-.24-.114-.24-.192 1.068.847-1.534-.984-.795-.765-1.192-.934.874.793-.308.097-.374-.02-.243.274.033.466.483.335-.059.35.095.136.32.4.133.145.3.34.096.643.327.449.114.265 1.132 2.265.143.702.447.336-.014.815.405.308.14 1.426.445 1.23.14.027.135.404-.015.149-.019.12.3.518.05.079-.043.21-.044.199.265 1.274 1.019 3.153.373 2.98.14.433-.059.35.05 2.47-.259 1-.089.559.126.344-.123.172-.11.5-.58 1.91-.886 1.592.363.686-.06.09.176.026.12.057.173.164.561.602.436.019-.189.64.418 1.132.428.625.103.93.233-.095.25-.066-.022-.148.878-1.154.12-.35.149-.004.83-1.471.222-.006 1.645-3.716.277-1.288-.02-.864.135-.589.093-.121-.209-.899.054-.547-.224-.58-.35-2.088-.111.003-.143-.95-.561-1.098-.156-1.038-.279-.37-.576-1.943-.823-1.608-.229-.778-.54-.712-.05-.585-.495-.653-.022-.148-.216-.451-.375-.518-.008-.297-.167-.453-.373-.755-.276-.192-.799-1.44-.118-.543-.119-.295-.053-.108.033-.269.09-.141.727.796.124.086.293.221.404.546.74.558.266.37.092.117.195.313.184.234.267.132.556.572.688.708.418.804.306.141.17.145.086.078.06.147.14.026.158.314 1.206 1.022.313.191.287.43 1.4 1.335-.29.941.105 1.447 1.438 1.414 3.224 2.104.124.087.084.146.223-.005.84.734.479.306.087.087.309.161 4.26 2.982.335.34.3.021.11.315.124.087 2.85 2.083.219.223.264.113 1.916 1.382.086.077.24.113 5.366 3.68 2.71 1.65.826.386.187.253.533-.073.122-.092.119-.202-.064-.177-.772-.526z"
          transform="matrix(1.33333 0 0 -1.33333 -239.467 788.02) translate(-524.406 -3.92) translate(593.02 18.624)"
          fill="#393738"
          fillOpacity={1}
          fillRule="nonzero"
          stroke="none"
        />
        <Path
          d="M698.713-277.243l-.874 1.148-.351.81-.704.593-.292.32-.367.355-.339.28-.714 1.095-1.291 1.02-.201.428-.057.461-.667.847-.617.287-.475.333-.56.625-1.64 1.787-.303.278-.112.337-.145.01-.72.937-.652.546-.042.131-.381.399-1.164.882-1.048 1.245-.202.472-.754.896-.967.268-.537.924-2.178 1.11-.819.986-.287.22-.382.413-.173.083-.145.01-.689 1.064-.286.177-.218.015-1.071.962-1.383.096-.305-.193-.355-.175-.608-.458-.67-.167-.281-.195-.132-.034-.058-.324-.61-.672-.655-.498-.156-.289-.444-.34-.758-.619-.794-1.16-.523-.206-.426-.727-.488-.18-.135-.234-.027-.213-.503-.636-.19-.359-.064-.167-.551-.376.009-.214-.14-.12-.33-.476-.377-.217-.093-.337-.626-.327-.354.067v-.8l-.453-.14.082-.206-1.357-1.29-.396-.059.044-.175.155-.21-.033-.084-.207-.243-4.358-4.426-.459-.296.65.605-1.143-1.464-.267-.239-.014.023-.66-.911-.027-.213-.242-.24-.136.052.05.254-.596.885.086 1.037.241.27.063.209.084.28.07.881 1.183 2.197-.033 1.525-.013.3.029.17.096.28.133.247.388.802.663.297.99 1.646.093.079-.003.072.581.516.29.566.21.143.171.245.305.222-.006.128.208.2.193.273.236.412.16.19.546.504.488.98.07.038.303.265 4.254 5.691.472.51.093.08.172.202.404.429.097.279.18.03.16.203.956.776.362.561.092.365-.13.467-.666.847-.683.134-.56.625-.288.22-.192.228-.55.382-.285.176-.416.373-.628.787-.073.005.007-.158-1.11 1.036-1.098.748-.273.434-.392.113-1.524 1.622-3.126 2.563-.637.716-1.267.747-.563.71-.157.269-.254.261 1.116-1.164-1.321 1.693-.994.855-1.231 1.302 1.034-.945.092.365-.056.433.313.307.568.003.447-.531.419.099.174-.098.51-.336.188-.142.438-.317.788-.055.571-.34.332-.109 2.842-1.114.864-.103.444-.489.988.089.407-.444 1.742-.036 1.53-.407.044-.16.501-.121.18.03.143.033.654-.304.1-.049.25.068.24.07 1.568-.196 3.909-.903 3.647-.17.537-.123.419.1 3.003.16 1.192.389.67.153.428-.116.2.158.596.173 2.271.84 1.858 1.172.862-.361.105.078.046-.203.078-.134.214-.187.777-.597.059-.505.76.276 1.409-.385.794-.441 1.137-.037-.096-.279-.059-.296-.182.013-1.328-1.122-.415-.171.008-.172-1.716-1.095.012-.258-4.373-2.238-1.54-.435-1.05-.055-.703-.208-.14-.12-1.108.164-.66-.111-.722.208-2.561.222-.007.13-1.164.08-1.379.555-1.273.089-.473.29-2.404.497-2.02.813-.963.197-.908.563-.714.007-.833.516-.182.013-.565.211-.659.39-.362-.018-.563.154-.947.366-.256.303-1.813.8-.67.09-.367.11-.135.053-.324-.063-.164-.117 1.027-.773.114-.136.293-.32.696-.421.738-.81.471-.275.15-.096.396-.2.298-.192.183-.299.74-.595.916-.735 1.01-.414.197-.343.19-.185.1-.093.184-.056.044-.16.393-.156 1.341-1.309.258-.347.545-.295 1.736-1.508 1.118.422 1.764.005 1.835-1.544 2.82-3.556.115-.137.185-.084.012-.258.96-.91.41-.53.114-.094.22-.343 3.971-4.681.44-.36.051-.347.391-.098.116-.137 2.764-3.123.288-.235.16-.297 1.835-2.101.1-.093.158-.268 4.908-5.904 2.227-3 .537-.924.323-.194-.044-.626-.102-.15-.235-.155-.22.059-.704.849z"
          transform="matrix(1.33333 0 0 -1.33333 -239.467 788.02) translate(-524.406 -3.92) translate(593.02 18.624) matrix(.04704 .78137 -.85799 .03848 0 0)"
          fill="none"
          stroke="#fff33e"
          strokeWidth={1.74189997}
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit={22.92558479}
          strokeDasharray="none"
          strokeOpacity={1}
        />
        <Path
          d="M270.741 535.284l-1.025-.638-.712-.243-.542-.527-.289-.216-.321-.273-.257-.254-.972-.516-.935-.97-.378-.14-.398-.027-.758-.488-.275-.472-.308-.358-.563-.413-1.61-1.213-.253-.226-.294-.075-.016-.113-.838-.526-.499-.49-.115-.027-.36-.282-.81-.876-1.119-.77-.414-.14-.804-.555-.275-.746-.818-.383-1.055-1.66-.885-.601-.202-.216-.372-.283-.08-.131-.016-.114-.944-.497-.166-.217-.023-.17-.875-.8-.148-1.076.15-.246.134-.284.364-.493.113-.53.154-.227.022-.104.276-.058.548-.503.396-.53.24-.134.272-.36.495-.616.957-.665.153-.416.604-.361.132-.388.194-.115.18-.029.524-.417.298-.162.14-.058.297-.445h.185l.095-.114.394-.276.168-.303.285-.086.251-.502-.075-.273.687-.031.099-.36.18.056 1.044-1.11.031-.311.152.027.189.113.07-.029.198-.17 3.593-3.576.233-.37-.489.531 1.203-.95.191-.218-.02-.009.751-.55.182-.03.194-.199-.051-.103-.216.048-.787-.432-.886.107-.22.2-.176.057-.237.076-.753.089-1.83 1.008-1.308.034h-.26l-.144.03-.235.085-.206.114-.67.334-.223.53-1.366.837-.063.076h-.062l-.416.474-.472.247-.112.17-.202.143-.176.247h-.111l-.162.17-.224.162-.343.2-.155.133-.407.445-.819.42-.029.056-.213.247-4.682 3.542-.416.389-.063.076-.166.142-.35.332-.234.086-.017.142-.167.133-.621.777-.464.305-.31.086-.406-.084-.758-.488-.146-.529-.563-.413-.203-.217-.204-.141-.354-.414-.165-.217-.339-.31-.705-.46-.008-.057.136-.001-.94-.828-.695-.829-.385-.197-.115-.302-1.463-1.128-2.346-2.344-.645-.47-.7-.96-.637-.414-.237-.112-.236-.189 1.051.828-1.514-.967-.781-.744-1.175-.912.86.771-.31.087-.374-.027-.248.256.024.444.477.329-.066.33.093.133.312.386.13.14.293.33.084.615.319.433.109.255 1.09 2.178.128.67.44.33-.029.775.4.3.113 1.36.421 1.18.14.028.127.387-.017.142-.022.113.291.5.047.075-.047.199-.047.189.241 1.218.959 3.02.317 2.843.131.415-.066.331.004 2.353-.277.946-.1.53.12.33-.127.161-.12.473-.615 1.807-.917 1.496.35.66-.062.086.176.027.119.057.17.16.55.583.435.027-.2.605.395 1.086.417.603.085.888.235-.086.25-.058-.019-.142.9-1.08.127-.331h.149l.858-1.384h.222l1.715-3.503.3-1.22-.001-.823.145-.558.096-.113-.193-.86.064-.52-.212-.556-.311-1.993h-.11l-.126-.906-.54-1.056-.137-.992-.27-.358-.54-1.86-.793-1.546-.214-.745-.526-.688-.04-.557-.482-.632-.019-.141-.208-.434-.364-.5-.002-.283-.159-.434-.359-.726-.272-.188-.77-1.386-.11-.52-.113-.283-.05-.104.038-.255.093-.132.71.772.124.084.288.216.394.528.729.545.259.358.09.114.19.301.178.226.265.132.545.555.675.687.402.773.303.14.168.142.084.075.057.142.14.028.152.301 1.186.998.31.187.279.415 1.375 1.299-.31.89.08 1.378 1.41 1.375 3.184 2.066.123.085.08.14h.223l.826.715.473.3.086.085.306.16 4.202 2.922.33.33.3.027.102.302.123.085 2.81 2.04.215.216.262.112 1.89 1.353.084.076.237.112 5.297 3.608 2.679 1.625.817.384.182.245.535-.059.124-.085.122-.19-.06-.17-.762-.516z"
          transform="matrix(1.33333 0 0 -1.33333 -239.467 788.02) translate(-524.406 -3.92) translate(593.02 18.624)"
          fill="#fff33e"
          fillOpacity={1}
          fillRule="nonzero"
          stroke="none"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
