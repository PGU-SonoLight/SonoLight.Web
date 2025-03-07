<template>
    <footer class="h-1/24 flex justify-center items-center opacity-75">
        <span class="text-secondary">
            版权所有 &copy; 2024{{
                new Date().getFullYear() >= 2024
                    ? `~${new Date().getFullYear()}`
                    : ""
            }}
            声致发光项目团队<slot></slot>
        </span>
    </footer>
</template>
