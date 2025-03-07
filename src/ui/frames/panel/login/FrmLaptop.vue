<script setup lang="ts">
    import { ref } from "vue";
    import CompFooter from "@/ui/components/CompFooter.vue";
    import CompHeader from "@/ui/components/CompHeader.vue";

    type TLogin = "login" | "3rd" | "register";
    const page = ref<TLogin>("login");

    const handleJump = (e: Event, v: TLogin) => {
        e.preventDefault();
        page.value = v;
    };

    const handleLogin = () => {};
</script>

<template>
    <div id="FrmHomeLaptop" class="w-screen h-screen overflow-hidden">
        <CompHeader middle />
        <main
            class="w-full h-21/24 pb-12 flex flex-col justify-center items-center">
            <div class="card w-3/5 h-3/4 card-side bg-secondary shadow-sm">
                <div class="card-body">
                    <div class="flex items-center gap-4 w-full h-full">
                        <img
                            src="/static/Images/CartonRedstone.png"
                            class="w-96 h-96" />
                        <div
                            class="divider divider-primary divider-horizontal pr-12"></div>
                        <!-- 统一登录 -->
                        <section
                            class="w-full pr-16 flex flex-col gap-4"
                            v-if="page === 'login'">
                            <h1 class="text-secondary-content text-5xl">
                                SonoLight 统一账户登陆
                            </h1>
                            <br />
                            <form class="w-full">
                                <section>
                                    <label
                                        class="w-full input input-xl validator">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-7 h-7 opacity-50"
                                            viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="M17.755 14a2.25 2.25 0 0 1 2.248 2.25v.575c0 .894-.32 1.759-.9 2.438c-1.57 1.833-3.957 2.738-7.103 2.738s-5.532-.905-7.098-2.74a3.75 3.75 0 0 1-.898-2.434v-.578A2.25 2.25 0 0 1 6.253 14zm0 1.5H6.252a.75.75 0 0 0-.75.75v.577c0 .535.192 1.053.54 1.46c1.253 1.469 3.22 2.214 5.957 2.214c2.739 0 4.706-.745 5.963-2.213a2.25 2.25 0 0 0 .54-1.463v-.576a.75.75 0 0 0-.748-.749M12 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7" />
                                        </svg>
                                        <input
                                            type="input"
                                            required
                                            placeholder="用户名"
                                            pattern="[A-Za-z][A-Za-z0-9\-]*"
                                            minlength="3"
                                            maxlength="30"
                                            title="只能包含字母和数字" />
                                    </label>
                                    <p class="validator-hint hidden">
                                        [!] 长度应为 3 到
                                        30，只能包含字母、数字或英文短划线
                                    </p>
                                </section>
                                <br />
                                <section>
                                    <label
                                        class="w-full input input-xl validator">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-7 h-7 opacity-50"
                                            viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="M11.78 10.22a.75.75 0 0 0-1.06 1.06l.72.72l-.72.72a.75.75 0 1 0 1.06 1.06l.72-.72l.72.72a.75.75 0 0 0 1.06-1.062L13.561 12l.72-.72a.75.75 0 1 0-1.061-1.06l-.72.72zm-6.56 0a.75.75 0 0 1 1.06 0l.72.72l.72-.72a.75.75 0 1 1 1.06 1.06l-.719.72l.72.718A.75.75 0 1 1 7.72 13.78L7 13.06l-.72.72a.75.75 0 0 1-1.06-1.06l.72-.72l-.72-.72a.75.75 0 0 1 0-1.06M16.5 12.5a.75.75 0 0 0 0 1.5h1.75a.75.75 0 0 0 0-1.5zM5.25 5A3.25 3.25 0 0 0 2 8.25v7.5A3.25 3.25 0 0 0 5.25 19h13.5A3.25 3.25 0 0 0 22 15.75v-7.5A3.25 3.25 0 0 0 18.75 5zM3.5 8.25c0-.967.783-1.75 1.75-1.75h13.5c.967 0 1.75.783 1.75 1.75v7.5a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75z" />
                                        </svg>
                                        <input
                                            type="password"
                                            required
                                            placeholder="密码"
                                            minlength="8"
                                            maxlength="128"
                                            title="Only letters, numbers or dash" />
                                    </label>
                                    <p class="validator-hint hidden">
                                        [!] 长度应为 8 到 128
                                    </p>
                                </section>
                                <br />
                                <section class="flex items-center gap-4">
                                    <button class="btn btn-xl btn-primary">
                                        <span class="font-normal">登录</span>
                                    </button>
                                    <button
                                        class="btn btn-xl btn-outline btn-primary"
                                        @click="(e) => handleJump(e, '3rd')">
                                        <span class="font-normal">
                                            通过第三方账户登录
                                        </span>
                                    </button>
                                </section>
                                <br />
                                <br />
                                <span
                                    class="text-primary text-lg cursor-pointer"
                                    @click="(e) => handleJump(e, 'register')">
                                    还没有账户？点击注册 &rarr;
                                </span>
                            </form>
                        </section>
                        <!-- 第三方登录 -->
                        <section
                            class="w-full pr-16 flex flex-col gap-4"
                            v-if="page === '3rd'">
                            <h1 class="text-secondary-content text-5xl">
                                SonoLight 第三方登陆
                            </h1>
                            <br />
                            <div role="alert" class="alert alert-warning">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6 shrink-0 stroke-current"
                                    fill="none"
                                    viewBox="0 0 24 24">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <span class="text-lg"
                                    >暂时不支持通过第三方账户登录 SonoLight
                                    平台，请使用统一账户登录</span
                                >
                            </div>
                            <section class="flex items-center gap-4">
                                <button
                                    class="btn btn-xl btn-outline btn-primary"
                                    @click="(e) => handleJump(e, 'login')">
                                    <span class="font-normal">
                                        通过统一账户登录
                                    </span>
                                </button>
                            </section>
                            <br />
                            <span
                                class="text-primary text-lg cursor-pointer"
                                @click="(e) => handleJump(e, 'register')">
                                还没有账户？点击注册 &rarr;
                            </span>
                        </section>
                        <!-- 注册 -->
                        <section
                            class="w-full pr-16 flex flex-col gap-4"
                            v-if="page === 'register'">
                            <h1 class="text-secondary-content text-5xl">
                                SonoLight 统一账户注册
                            </h1>
                            <br />
                            <form class="w-full">
                                <section>
                                    <label
                                        class="w-full input input-xl validator">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-7 h-7 opacity-50"
                                            viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="M17.755 14a2.25 2.25 0 0 1 2.248 2.25v.575c0 .894-.32 1.759-.9 2.438c-1.57 1.833-3.957 2.738-7.103 2.738s-5.532-.905-7.098-2.74a3.75 3.75 0 0 1-.898-2.434v-.578A2.25 2.25 0 0 1 6.253 14zm0 1.5H6.252a.75.75 0 0 0-.75.75v.577c0 .535.192 1.053.54 1.46c1.253 1.469 3.22 2.214 5.957 2.214c2.739 0 4.706-.745 5.963-2.213a2.25 2.25 0 0 0 .54-1.463v-.576a.75.75 0 0 0-.748-.749M12 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7" />
                                        </svg>
                                        <input
                                            type="input"
                                            required
                                            placeholder="用户名"
                                            pattern="[A-Za-z][A-Za-z0-9\-]*"
                                            minlength="3"
                                            maxlength="30"
                                            title="只能包含字母和数字" />
                                    </label>
                                    <p class="validator-hint hidden">
                                        [!] 长度应为 3 到
                                        30，只能包含字母、数字或英文短划线
                                    </p>
                                </section>
                                <br />
                                <section>
                                    <label
                                        class="w-full input input-xl validator">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="w-7 h-7 opacity-50"
                                            viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="M11.78 10.22a.75.75 0 0 0-1.06 1.06l.72.72l-.72.72a.75.75 0 1 0 1.06 1.06l.72-.72l.72.72a.75.75 0 0 0 1.06-1.062L13.561 12l.72-.72a.75.75 0 1 0-1.061-1.06l-.72.72zm-6.56 0a.75.75 0 0 1 1.06 0l.72.72l.72-.72a.75.75 0 1 1 1.06 1.06l-.719.72l.72.718A.75.75 0 1 1 7.72 13.78L7 13.06l-.72.72a.75.75 0 0 1-1.06-1.06l.72-.72l-.72-.72a.75.75 0 0 1 0-1.06M16.5 12.5a.75.75 0 0 0 0 1.5h1.75a.75.75 0 0 0 0-1.5zM5.25 5A3.25 3.25 0 0 0 2 8.25v7.5A3.25 3.25 0 0 0 5.25 19h13.5A3.25 3.25 0 0 0 22 15.75v-7.5A3.25 3.25 0 0 0 18.75 5zM3.5 8.25c0-.967.783-1.75 1.75-1.75h13.5c.967 0 1.75.783 1.75 1.75v7.5a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75z" />
                                        </svg>
                                        <input
                                            type="password"
                                            required
                                            placeholder="密码"
                                            minlength="8"
                                            maxlength="128"
                                            title="Only letters, numbers or dash" />
                                    </label>
                                    <p class="validator-hint hidden">
                                        [!] 长度应为 8 到 128
                                    </p>
                                </section>
                                <br />
                                <section class="flex items-center gap-4">
                                    <button class="btn btn-xl btn-primary">
                                        <span class="font-normal">注册</span>
                                    </button>
                                </section>
                                <br />
                                <br />
                                <span
                                    class="text-primary text-lg cursor-pointer"
                                    @click="(e) => handleJump(e, 'login')">
                                    已有账户？点击登录&rarr;
                                </span>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </main>
        <CompFooter>
            · 本页面背景图像由社区提供，版权由对应作者所有
        </CompFooter>
    </div>
</template>

<style lang="scss" scoped>
    div#FrmHomeLaptop {
        background: linear-gradient(
                to right,
                color-mix(in oklab, var(--color-primary), transparent 10%),
                color-mix(in oklab, var(--color-primary), transparent 10%)
            ),
            url("/static/Images/BgMachine.webp");
        background-size: cover;
        background-position-y: 50%;

        main {
            opacity: 0;
            animation: ZoomFadeIn 0.5s ease-in-out forwards;
        }
    }

    @keyframes ZoomFadeIn {
        from {
            scale: 110%;
            opacity: 0;
        }
        to {
            scale: 100%;
            opacity: 100;
        }
    }
</style>
