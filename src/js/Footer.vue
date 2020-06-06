<template>
    <footer data-model="Footer">
        <div id="up" style="font-size:40px">
            <span class="glyphicon glyphicon-hand-up"></span>
        </div>
    </footer>
</template>

<script>
    export default {
        data: function() {
            return {
                msg: 'hello'
            }
        },
        mounted: function() {
            $("#up").hide();

            $(window).on("scroll", function() {
                if ($(this).scrollTop() > 100) {
                    $('#up').fadeIn('slow');
                } else {
                    $('#up').fadeOut('slow');
                }
            });

            $('#up').click(function() {
                $('body,html').animate({scrollTop:0}, 500);
                return false;
            });
        }
    }

</script>

<style lang="scss" scoped>
    @import "../scss/main.scss";
</style>