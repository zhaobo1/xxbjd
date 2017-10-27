//main interface;
var xbinterface = {
    config:{
        ip:'http://139.224.220.248:8048/xiaobang/',
        pageSize:6
    },
    initCallbackmiddle:function(fn,data)
    {
        var code = data.code;
        if(data.data){
            if(data.data instanceof Array)
            {
                var data = data;
            }else{
                var data = data.data;
            }
            data.picurl = xbinterface.config.ip;
        }
        if(code==='200')
        {
            fn(data);
        }
    },
    ajaxs:function(url,method_type,callback,data){
        api.ajax({
            url: xbinterface.config.ip + url,
            method: method_type,
            data: data
        },function(ret, err){
            if (ret) {
                if(typeof callback == 'function')
                {
                    xbinterface.initCallbackmiddle(callback,ret);
                }
            } else {
                alert( JSON.stringify( err ) );
            }
        });

    },
    getSmscode:function(url,phone,code,callback){
        xbinterface.ajaxs(url,'post',callback,{values:{phone:phone}});
    },
    login:function(url,phone,code,callback)
    {
        xbinterface.ajaxs(url,'post',callback,{values:{phone:phone,code:code}});
    },
    mainInit:function(url,callback){
        xbinterface.ajaxs(url,'get',callback);
    },
    doctor_org_list:function(url,callback){
        xbinterface.ajaxs(url,'get',callback)
    },
    doctor_org_info:function(url,id,callback){
        xbinterface.ajaxs(url,'get',callback,{values:{id:id}})
    },
    newslist:function(url,callback){
        xbinterface.ajaxs(url,'get',callback)
    },
    getBaike:function(url,id,callback){
        xbinterface.ajaxs(url,'get',callback,{values:{parentId:id}})
    },
    getDisabilityClass:function(url,id,callback){
        xbinterface.ajaxs(url,'get',callback,{values:{parentId:id}})
    },
    getsc_level:function(url,callback){
        xbinterface.ajaxs(url,'get',callback)
    },
    pageAll:function(countAll){
        return  countAll%xbinterface.config.pageSize==0?countAll/xbinterface.config.pageSize:(countAll+(xbinterface.config.pageSize-countAll%xbinterface.config.pageSize))/xbinterface.config.pageSize;
    }
}
