export function SignatureAcrobat() {
  return (
    <svg
      className="signature-acrobat"
      viewBox="0 0 180 240"
      role="img"
      aria-labelledby="signature-acrobat-title"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="signature-acrobat-title">An original masked acrobat hanging from a web beside the Gaurab wordmark</title>
      <defs>
        <pattern id="acrobat-red-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(36)">
          <path d="M0 0V7M4 0V7" stroke="#8f242b" strokeWidth=".8" opacity=".58" />
        </pattern>
        <pattern id="acrobat-blue-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(-36)">
          <path d="M0 0V7M4 0V7" stroke="#172d5b" strokeWidth=".8" opacity=".62" />
        </pattern>
        <linearGradient id="acrobat-mask-red" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f05249" />
          <stop offset=".55" stopColor="#d8433e" />
          <stop offset="1" stopColor="#ad3034" />
        </linearGradient>
        <linearGradient id="acrobat-mask-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4777c4" />
          <stop offset="1" stopColor="#203d78" />
        </linearGradient>
      </defs>

      <g className="acrobat-hanging">
        <path d="M53 0v49" fill="none" stroke="#345aaa" strokeWidth="1.6" />
        <path d="m49 0 4 7 4-7m-4 7-5 6m5-6 5 6" fill="none" stroke="#345aaa" strokeWidth="1" />

        <g fill="none" stroke="#252b39" strokeLinecap="round" strokeLinejoin="round">
          <path d="m56 65-5-15" strokeWidth="11" />
          <path d="m56 65-5-15" stroke="#315ca8" strokeWidth="7" />
          <path d="m56 65-5-15" stroke="url(#acrobat-blue-hatch)" strokeWidth="7" />
          <path d="m51 51 2-5m-2 5-4-3m4 3-5 1" strokeWidth="3" />

          <path d="m81 109-12 25-4 30 8 17m29-70 12 25 1 29-10 16" strokeWidth="13" />
          <path d="m81 109-12 25-4 30 8 17" stroke="#315ca8" strokeWidth="8" />
          <path d="m81 109-12 25-4 30 8 17" stroke="url(#acrobat-blue-hatch)" strokeWidth="8" />
          <path d="m96 111 14 23 1 29-10 16" stroke="#d8433e" strokeWidth="8" />
          <path d="m96 111 14 23 1 29-10 16" stroke="url(#acrobat-red-hatch)" strokeWidth="8" />
          <path d="m73 180-4 8m32-1 8 3" strokeWidth="5" />

          <path d="M72 79q13-9 27 0l7 31q-15 12-32 1Z" fill="#d8433e" strokeWidth="3" />
          <path d="M72 79q13-9 27 0l7 31q-15 12-32 1Z" fill="url(#acrobat-red-hatch)" stroke="none" />
          <path d="m74 84 28 21m-29-10 23 18m-13-35 24 18" stroke="#f5eee5" strokeWidth="1.1" />
          <path d="m86 78 2 34m9-32-5 34" stroke="#315ca8" strokeWidth="1.2" />

          <path d="m55 62 8-15 22-5 19 13 5 24-10 13-27-1-17-12Z" fill="url(#acrobat-mask-blue)" strokeWidth="3.5" />
          <path d="m55 62 8-15 22-5 19 13 5 24-10 13-27-1-17-12Z" fill="url(#acrobat-blue-hatch)" stroke="none" />
          <path d="m64 51 21-7 19 12 3 17-13 15-17-2-18-17Z" fill="url(#acrobat-mask-red)" stroke="#202841" strokeWidth="1.5" />
          <path d="m64 51 21-7 19 12 3 17-13 15-17-2-18-17Z" fill="url(#acrobat-red-hatch)" opacity=".52" />
          <path d="m59 62 18 1 10 16-19 4q-10-7-9-21Z" fill="#f8f7f2" stroke="#182744" strokeWidth="3" />
          <path d="m104 62-18 1-9 16 19 4q10-7 8-21Z" fill="#f8f7f2" stroke="#182744" strokeWidth="3" />
          <path d="m62 64 12 1 8 12-13 3q-8-5-7-16Zm39 0-12 1-8 12 13 3q8-5 7-16Z" fill="none" stroke="#fff" strokeWidth="1.4" opacity=".95" />
          <path d="m66 52 11 7m24-6-10 7m-29 5 9 7m34-7-9 7m-19 1 7 5m10-5-7 5" fill="none" stroke="#76272a" strokeWidth="1.2" />
          <path d="m59 61 6 2m43-2-6 2m-21 20 5 5m-11-35 6-4m13 0 6 4" fill="none" stroke="#f9d7ca" strokeWidth="1" />

          <g className="acrobat-wave-arm">
            <path d="m101 82 19-13 5-20" strokeWidth="12" />
            <path d="m101 82 19-13 5-20" stroke="#d8433e" strokeWidth="8" />
            <path d="m101 82 19-13 5-20" stroke="url(#acrobat-red-hatch)" strokeWidth="8" />
            <path d="m125 51 2-13m-2 13 10-9m-10 9 13-2m-13 2 10 6" strokeWidth="3.8" />
            <path d="m125 51 2-13m-2 13 10-9m-10 9 13-2m-13 2 10 6" stroke="#315ca8" strokeWidth="2" />
          </g>
        </g>

        <g fill="none" stroke="#d8433e" strokeLinecap="round" opacity=".8">
          <path d="m143 39 5-5m2 12 7-2m-10 12 6 4" strokeWidth="1.6" />
        </g>
        <g fill="none" stroke="#345aaa" strokeLinecap="round" opacity=".7">
          <path d="m41 72-6-5m99 90 7 3m-79-91-4-6m65 39 6-4" strokeWidth="1.2" />
        </g>
      </g>
    </svg>
  );
}
