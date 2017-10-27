//头部三角形返回上一页；
if($('.back').length)
{
    document.getElementsByClassName('back')[0].addEventListener('click',function(){
        api.historyBack({
            frameName:''
        },function(ret,err){
            if(!ret.status){
                api.closeWin();
            }
        });
    })
}
//分享控件；
function ShareModule(obj){
    this.title=obj.title;
    this.item_arr=obj.arr;
    this.create_item = function(){
        var html = '';
        this.item_arr.forEach(function(m,i){
            html+='<div class="item_child" tapmode="item_hover"><img src="../image/grid8-3.png">'+m+'</div>';
        });
        return html;
    };
    this.createHtml_mask=function(){
        var item =  this.create_item();
        var mask = '<div id="sharebox" onclick="Share.close();">'+
            '<div id="mainbox" onclick="event.stopPropagation();">'+
                '<div class="title">'+this.title+'</div>'+
                '<div class="box">'+item+'</div>'+
                '<div class="closebox"><img onclick="Share.close();" src="../image/guanbi.png"></div>'
            '</div>'+
        '</div>';
        $('body').append(mask);
    };
    this.open=function(){
        //打开浮层和框架；
        this.createHtml_mask();
    }
    this.close=function(){
        //关闭分享框；
        $('#sharebox').remove();
    }
}
