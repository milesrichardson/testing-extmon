<script>
    const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
</script>

{#if !isDarkMode}
    <svg
        class={$$props.class}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clip-path="url(#clip0_3246_8450)">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.2951 5.70511C17.9057 5.31575 17.2745 5.31575 16.8851 5.70511L12.0001 10.5901L7.11511 5.70511C6.72575 5.31575 6.09447 5.31575 5.70511 5.70511C5.31575 6.09447 5.31575 6.72575 5.70511 7.11511L10.5901 12.0001L5.70511 16.8851C5.31575 17.2745 5.31575 17.9057 5.70511 18.2951C6.09447 18.6845 6.72575 18.6845 7.11511 18.2951L12.0001 13.4101L16.8851 18.2951C17.2745 18.6845 17.9057 18.6845 18.2951 18.2951C18.6845 17.9057 18.6845 17.2745 18.2951 16.8851L13.4101 12.0001L18.2951 7.11511C18.6845 6.72575 18.6845 6.09447 18.2951 5.70511Z"
                fill="#1C1B1F"
                fill-opacity="0.7"
            />
        </g>
        <defs>
            <clipPath id="clip0_3246_8450">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
{:else}
    <svg
        class={$$props.class}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clip-path="url(#clip0_3246_8450)">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.2951 5.70511C17.9057 5.31575 17.2745 5.31575 16.8851 5.70511L12.0001 10.5901L7.11511 5.70511C6.72575 5.31575 6.09447 5.31575 5.70511 5.70511C5.31575 6.09447 5.31575 6.72575 5.70511 7.11511L10.5901 12.0001L5.70511 16.8851C5.31575 17.2745 5.31575 17.9057 5.70511 18.2951C6.09447 18.6845 6.72575 18.6845 7.11511 18.2951L12.0001 13.4101L16.8851 18.2951C17.2745 18.6845 17.9057 18.6845 18.2951 18.2951C18.6845 17.9057 18.6845 17.2745 18.2951 16.8851L13.4101 12.0001L18.2951 7.11511C18.6845 6.72575 18.6845 6.09447 18.2951 5.70511Z"
                fill="#FFFFFF"
                fill-opacity="0.7"
            />
        </g>
        <defs>
            <clipPath id="clip0_3246_8450">
                <rect width="24" height="24" fill="#1C1B1F" />
            </clipPath>
        </defs>
    </svg>
{/if}
