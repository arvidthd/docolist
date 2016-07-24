var enem = (function ($) {
    
    var enemProjectName = 'enem_apps',
        enemTestElement = '<div class="enem_test_element" style="position:fixed; color:white; z-index:9999; bottom:0; right:0; background:tomato; padding:8px 15px;"></div>',
        enemSiteUrl     = location.origin + '/';
  
	var bismillah = function() {
        console.log('alhamdulillah');
    }
    
    var uhuy = function() {
		console.log('hello :)');
	}
    
    var powerGetUrl = function() {
        var host = enemSiteUrl;
        return host;
    }
    
    var powerGetType = function(dataTitle){
        var enemTypeof = typeof(dataTitle);
        return {
            enemTypeof: enemTypeof,
        }
    }
    
    var powerRunCallback = function(callback) {
        if (callback) {
            var enemTypeof = powerGetType(callback).enemTypeof;
//            console.info(callback);
            if(enemTypeof === "function"){
                callback();
            } else {
                console.error('Sorry, check your callback. Your type is : ' + enemTypeof + ' :)');
            }
        } else {
            console.info('Sorry :)');
        }
    }
    
    var powerTime = function(dataTime) {
        
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        // add a zero in front of numbers<10
        m = checkTime(m);
        s = checkTime(s);
        
        var time = h+":"+m+":"+s;
        
        if($(dataTime.timeEl)[0]) {
            $(dataTime.timeEl).html(time);
        } else {
            console.error('Not Found Element timeEl. Your timeEl is : ' + dataTime.timeEl);
        }
        t = setTimeout(function(){powerTime(dataTime)},500);

        function checkTime(i)
        {
            if (i<10)
            {
                i="0" + i;
            }
            return i;
        }
    }
    
    var powerCountExample = function() {
//        function countUp(count)
//        {
//            var div_by = 100,
//                speed = Math.round(count / div_by),
//                $display = $('.count'),
//                run_count = 1,
//                int_speed = 24;
//
//            var int = setInterval(function() {
//                if(run_count < div_by){
//                    $display.text(speed * run_count);
//                    run_count++;
//                } else if(parseInt($display.text()) < count) {
//                    var curr_count = parseInt($display.text()) + 1;
//                    $display.text(curr_count);
//                } else {
//                    clearInterval(int);
//                }
//            }, int_speed);
//        }
//        countUp(123);
    }
    
    var powerCount = function(dataCount) {
        console.info(dataCount);
        if($(dataCount.elSelector)[0]) {
//            console.info($(dataCount.elSelector)[0]);
            var div_by = 100,
                speed = Math.round(dataCount.totalCount / div_by),
                $display = $(dataCount.elSelector),
                run_count = 0,
                int_speed = 24,
                count_total = dataCount.totalCount;

            var int = setInterval(function() {
                if(run_count < div_by){
                    $display.text(speed * run_count);
                    run_count++;
                } else if(parseInt($display.text()) < dataCount.totalCount) {
//                    var curr_count = parseInt($display.text()) + 1;
//                    console.info('ini total ' + count_total);
//                    var curr_count = parseInt(count_total);
//                    $display.text(curr_count);
                    var curr_count = parseInt($display.text()) + 1;
                    $display.text(curr_count);
                } else {
                    clearInterval(int);
                    var curr_count = parseInt(count_total);
                    $display.text(curr_count);
                }
            }, int_speed);
//            clearInterval(int);
            if(dataCount.afterLoad) {
//                clearInterval(int);
                powerRunCallback(dataCount.afterLoad);
            }
        } else {
            console.error('Sorry, not found elSelector. Your elSelector is ' + dataCount.elSelector);
        }
        
    }
	
	var powerVex = function(dataVex) {
        if(dataVex) {
            var enemTypeof = powerGetType(dataVex).enemTypeof;
            if(enemTypeof === 'object') {
                if(dataVex.vexMessages) {
                    if(dataVex.beforeLoad) {
                        var enemTypeof = powerGetType(dataVex.beforeLoad).enemTypeof;
                        if(enemTypeof === 'function') {
                            powerRunCallback(dataVex.beforeLoad);
                        }
                    }
                    vex.defaultOptions.className = 'vex-theme-os';
                    vex.dialog.alert(dataVex.vexMessages);
                    if(dataVex.afterLoad) {
                        var enemTypeof = powerGetType(dataVex.afterLoad).enemTypeof;
                        if(enemTypeof === 'function') {
                            powerRunCallback(dataVex.afterLoad);
                        }
                    }
                } else {
                    console.error('Sorry, not found vexMessages');
                }
            } else {
                console.error('Data must be object. Your data is: ' + dataVex);
            }
            
        } else {
            console.error('Sorry, not found dataVex');
        }
    }
    
    var powerModernizr = function(dataModernizr) {
        if(Modernizr.dataModernizr.usage) {
            //do something if support
            if(dataModernizr.clbkSupport) {
                powerRunCallback(dataModernizr.clbkSupport);
            }
        } else {
            //do something if not support
            if(dataModernizr.clbkNotSupport) {
                powerRunCallback(dataModernizr.clbkNotSupport);
            }
        }
    }
    
    var powerAjaxRender = function(dataRender, clbk) {
        if(dataRender) {

            if($(dataRender.enemElLoading).is(':hidden')){
                $(dataRender.enemElLoading).fadeIn();
            }

            $.ajax({
                url     : dataRender.enemUrl,
                type    : 'POST',
                data    : dataRender.enemData,
                success : function(data){
                    //enem_loading.fadeOut();
                    setTimeout(function(){
                        $(dataRender.enemElLoading).hide();
                        $(dataRender.enemElContainer).html(data);
                        if(clbk) {
                            powerRunCallback(clbk);
                        }
                    }, 1000);
                }
            });
            return true;
        } else {
            console.error('Sorry :) not found dataRender in powerAjaxRender');
        }
    }
    
    var powerEnem = function() {
        $('[data-enem]').on('click', function(){
            var enemThisEl = $(this),
                enemKeyEl = enemThisEl.attr('data-enem');
            
            if(enemKeyEl != null) {
                if(enemKeyEl === 'enemModalDynamic') {
                    var enemModal = $('#enemModalDynamic'),
                        enemModalId = enemThisEl.attr('data-modal-id'),
                        enemModalElLoading = '#enemModalDynamic .loading-modal',
                        enemModalElContainer = '#enemModalDynamic .modal-content',
                        enemAjaxUrl = enemSiteUrl + 'enem/ajax/modal';
                    
                    var enemDataAjax = {
                        enemElLoading: enemModalElLoading,
                        enemElContainer: enemModalElContainer,
                        enemUrl: enemAjaxUrl,
                        enemData: {
                            enem_modal_id: enemModalId,
                        },
                    }
                    
                    if(enemModal[0]) {
                        if(enemModalId != null) {
                            powerAjaxRender(enemDataAjax, function(){
                                enemModal.modal('show');
                            });
                        } else {
                            console.error('Sorry not found modal id')
                        }
                        
                    } else {
                        console.error('Sorry not found modal element');
                    }
                    
                } else {
                    console.error('Sorry, wrong data-enem');
                }
            } else {
                console.error('Sorry, not found data-enem');
            }
        });
    }
	
	var powerAlert = function(dataAlert) {
		if(dataAlert) {
			var enemTypeof = powerGetType(dataAlert).enemTypeof;
			if(enemTypeof === 'object') {
				if(dataAlert.status) {
					if(dataAlert.messages) {
						switch(dataAlert.status) {
							case 0:
								var enemAlertStatus = 'danger';
							break;
								
							case 1:
								var enemAlertStatus = 'success';
							break;
								
							case 2:
								var enemAlertStatus = 'info';
							break;
								
							case 3:
								var enemAlertStatus = 'warning';
							break;
								
							default:
								var enemAlertStatus = 'info';
							break;
						}
						var enemTemplateAlert = '<div class="enem alert alert-'+ enemAlertStatus +' power-alert message-box">'+ dataAlert.messages +'</div>',
							enemElAlert = $('[data-enem-power="powerAlert"]');
						
						enemElAlert.html(enemTemplateAlert);
						setTimeout(function(){
							enemElAlert.addClass('active');
						},500);
						setTimeout(function(){
							enemElAlert.removeClass('active');
						},5500);
					} else {
						console.error('Sorry, not found dataAlert messages');
					}
				} else {
					console.error('Sorry, not found dataAlert status');
				}
			} else {
				console.error('Data must be object. Your data is: ' + dataAlert);
			}
		} else {
			console.error('Sorry, not found dataAlert');
		}
	}

	return {
		uhuy: uhuy,
        bismillah: bismillah,
        powerGetUrl: powerGetUrl,
        powerRunCallback: powerRunCallback,
        powerTime: powerTime,
        powerEnem: powerEnem,
		powerVex: powerVex,
		powerModernizr: powerModernizr,
        powerAjaxRender: powerAjaxRender,
		powerAlert: powerAlert,
	};

})(jQuery);