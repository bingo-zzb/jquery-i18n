/**
 * Created by Administrator on 2017/8/3.
 */
$(function(){
    $.fn.extend({
        loadProperties : function (language) {
            $.i18n.properties({
                name : 'strings', //资源文件名称
                path : '../i18n/', //资源文件路径
                mode : 'map', //用Map的方式使用资源文件中的值
                language : language?language:"en",
                encoding: 'UTF-8',
                callback : function() {//加载成功后设置显示内容
                    var $map = $.i18n.map;
                    for(var _this in $map) {
                        var $text = $("[setText=\""+_this+"\"]");
                        if($text.length > 0){
                            $.each($text, function (index, element) {
                                if(element.nodeName == "INPUT"){
                                    $text.val($map[_this]);
                                }else {
                                    $text.text($map[_this]);
                                }
                            })
                        }
                    }
                }
            });
        }
    })
    $.fn.loadProperties();
});