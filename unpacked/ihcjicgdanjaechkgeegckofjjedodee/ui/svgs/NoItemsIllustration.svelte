<script>
    const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
</script>

{#if !isDarkMode}
    <svg
        width="168"
        height="168"
        viewBox="0 0 168 168"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="84" cy="84" r="84" fill="#E5E6E8" />
        <path
            d="M37.8717 56.6661C38.0507 52.3814 41.5764 49 45.8648 49H129.476C134.147 49 137.825 52.9857 137.45 57.642L132.88 114.397C132.714 116.46 131.002 118.056 128.933 118.076L39.4794 118.958C37.1893 118.981 35.3478 117.08 35.4434 114.792L37.8717 56.6661Z"
            fill="#B9BBC1"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34 50.5122C31.7909 50.5122 30 52.3031 30 54.5122V58.8644H58.9756L56.4934 52.9617C55.8693 51.4775 54.4162 50.5122 52.8062 50.5122H34ZM120.684 58.8647H30L32.4666 115.175C32.5603 117.314 34.3217 119 36.4628 119H126.797C129.074 119 130.892 117.101 130.793 114.825L128.676 66.5146C128.489 62.2365 124.966 58.8647 120.684 58.8647Z"
            fill="white"
        />
    </svg>
{:else}
    <svg
        width="168"
        height="168"
        viewBox="0 0 168 168"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="84" cy="84" r="84" fill="#414451" />
        <path
            d="M37.8717 56.6661C38.0507 52.3814 41.5764 49 45.8648 49H129.476C134.147 49 137.825 52.9857 137.45 57.642L132.88 114.397C132.714 116.46 131.002 118.056 128.933 118.076L39.4794 118.958C37.1893 118.981 35.3478 117.08 35.4434 114.792L37.8717 56.6661Z"
            fill="#282A32"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34 50.5122C31.7909 50.5122 30 52.3031 30 54.5122V58.8644H58.9756L56.4934 52.9617C55.8693 51.4775 54.4162 50.5122 52.8062 50.5122H34ZM120.684 58.8647H30L32.4666 115.175C32.5603 117.314 34.3217 119 36.4628 119H126.797C129.074 119 130.892 117.101 130.793 114.825L128.676 66.5146C128.489 62.2365 124.966 58.8647 120.684 58.8647Z"
            fill="#747784"
        />
    </svg>
{/if}
