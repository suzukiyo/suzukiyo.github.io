<template>
    <section data-model="Work" id="work-area">
        <h1 class="work_title text-center">WORK</h1>
        <h2 class="text-center passing">「あたりまえをやる」</h2>
        <article class="com">
            <h3 class="text-center">フルスタックであり続ける</h3>
            <p>サーバサイドエンジニアをメインで開発しているが、フルスタックなエンジニアでありたいと思っている。フロントサイドもインフラも必要な時代と言われているが、どうだっていい。ただ自分で動くものを作りたいんだ。</p>
            <h3 class="text-center">誰が見てもわかるコードを書く習慣を作る</h3>
            <p>コードを書いて仕事は終わりではない。そのあとそのコードを調査・修正する人がいる。エレガントなコードを追求することも良いが、一番大切なことは人間が読めるコードである。</p>
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
                'model' : document.querySelectorAll('[data-model="Work"]')
            }
            $(SELECTORs.model).find('.com').css('height', $(window).height() + 'px');
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/main.scss";
</style>