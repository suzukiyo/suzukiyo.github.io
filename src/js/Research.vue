<template>
    <section data-model="Research" id="research-area">
        <h1 class="research_title text-center">Learning</h1>
        <article class="research com">
            <ul class="lists">
                <li class="lists-list">
                    <h4 class="lists-list__name">オブジェクト指向開発</h4>
                    <p class="lists-list__content">オブジェクト指向エクササイズとTDD、DDDを軸に、オブジェクト指向開発を最大に引き出すために研究する。</p>
                </li>
                <li class="lists-list">
                    <h4 class="lists-list__name">スムーズな開発環境</h4>
                    <p class="lists-list__content">開発環境の構築の自動化(Dockerなど)について研究する。</p>
                </li>
                <li class="lists-list">
                    <h4 class="lists-list__name">効果的SEO戦略</h4>
                    <p class="lists-list__content">効果的なSEOロジックをパターン化し、最適なSEOを選択可能にするよう研究する。</p>
                </li>
            </ul>
            <ul class="lists">
                <li class="lists-list">
                    <h4 class="lists-list__name">モデリング</h4>
                    <p class="lists-list__content">モデリングはドメインによって様々なものになり得る。しかしどういったもので型として確立することができるものを研究する。</p>
                </li>
                <li class="lists-list">
                    <h4 class="lists-list__name">アーキテクチャ図</h4>
                    <p class="lists-list__content">既存のアーキテクチャ図では書いた人、または専門知識が高くないとわからないものばかりである。よって、わかりやすいアーキテクチャ図を目指し、研究する。</p>
                </li>
                <li class="lists-list">
                    <h4 class="lists-list__name">エンジニアチームビルディング</h4>
                    <p class="lists-list__content">エンジニアチームをまとめるのは至難の業である。その中で効果的な手法を研究する。</p>
                </li>
            </ul>
        </article>
    </section>
</template>

<script>
    export default {
        data: function() {
            return {
                msg: 'hello'
            }
        },
        mounted: function() {
            var SELECTORs = {
                'model' : document.querySelectorAll('[data-model="Research"]')
            }
            $(SELECTORs.model).find('.com').css('height', $(window).height() + 'px');
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/main.scss";
</style>