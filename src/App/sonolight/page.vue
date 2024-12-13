<script setup lang="ts">
    import { $t } from "@/modules/i18n";
</script>

<template>
    <main id="laptop">
        <h1>{{ $t("app.sonolight.title") }}</h1>
        <div id="content">
            <div class="card" id="left">
                <div class="flex">
                    <img
                        src="@a/images/blocks/Invicon_Chest.png"
                        alt="left"
                        class="card-img"
                        style="scale: 3.5" />
                    <span class="title">
                        {{ $t("app.sonolight.title_je") }}
                    </span>
                </div>
                <br />
                <br />
                <span>
                    {{ $t("app.sonolight.title_je_desc") }}
                </span>
            </div>
            <div class="card" id="right">
                <div class="flex">
                    <img
                        src="@a/images/blocks/Invicon_Bedrock.png"
                        alt="right"
                        class="card-img" />
                    <span class="title">
                        {{ $t("app.sonolight.title_be") }}
                    </span>
                </div>
                <br />
                <br />
                <span>
                    {{ $t("app.sonolight.title_be_desc") }}
                </span>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
    $primary: #57d3ff;
    $secondary: #1e2c31;
    $font: #fff5e2;

    main#laptop {
        width: 94vw;
        height: 92vh;
        margin: 4vh 3vw 0 3vw;

        h1 {
            margin: 0;
            font-size: 400%;
            font-weight: normal;
        }

        div#content {
            margin-top: 4vh;
            margin-right: 1vw;
            height: 80%;
            display: flex;
            justify-content: space-around;
            align-items: center;

            div.card {
                width: 25vw;
                height: 25vw;
                background-color: $secondary;
                border-radius: 16px;
                border: 4px solid;
                transition: all 0.25s ease-in-out;
                padding: 5vw;

                img.card-img {
                    scale: 3;
                    margin-left: 5%;
                    margin-right: 12%;
                }
                span.title {
                    font-size: 300%;
                    transform: translateY(-10%);
                }

                &#left {
                    border-color: $font;
                }

                &#right {
                    border-color: $primary;
                }

                &:hover {
                    transform: translate(-2px, -2px);
                }
            }
        }
    }

    div.flex {
        display: flex;
        align-items: center;
        gap: 16px;
    }
</style>
