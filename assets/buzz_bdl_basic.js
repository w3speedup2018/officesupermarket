function include(filename, onload) {
			var head = document.getElementsByTagName('head')[0];
			var script = document.createElement('script');
			script.src = filename;
			script.type = 'text/javascript';
			script.onload = script.onreadystatechange = function() {
				if (script.readyState) {
					if (script.readyState === 'complete' || script.readyState === 'loaded') {
						script.onreadystatechange = null;                                                  
						onload();
					}
				} 
				else {
					onload();          
				}
			};
			head.appendChild(script);
		}

	if ((typeof jQuery === 'undefined') || (parseFloat(jQuery.fn.jquery) < 1.7)) {
		include('//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', function() {
		$(document).ready(function() {
				var htm = '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>';
					$('.content').prepend(htm);
	
			if((Shopify.checkout != undefined)){
				//var order_number = (jQuery(".os-order-number").text()).match(/\d+/)[0];
				//Shopify.checkout.page;
				var RequestUrl = "https://checkoutbundles.com/apis/offers.php?orderinfocapture=yes";
				$.ajax({
					url: RequestUrl,
					type: 'POST',
					crossDomain:true,
					data : {checkout_data:btoa(JSON.stringify(Shopify.checkout))},
					dataType : "html",
					success: function(response){							
						//var CartToAdded = JSON.parse(response);
						//console.log(response);
						//return false;							
					},
					error: function(err){
					}
				 });
			}
			//console.log(Shopify);
			//console.log(window.saso);
			var root = location.protocol + '//' + location.host;		
			
				if(window.location.href.indexOf("products") > -1){
				var currentURL = window.location.href.split('?')[0];
				
				var queryString = getUrlParams();
				//console.log(queryString.preview_id);
				
				$.get(currentURL+".json", function( data ) {
					//console.log(data.product.variants[0].price);
					localStorage.setItem("currentProductPrice", data.product.variants[0].price);
					//1440126861379
										
					var RequestUrl = "https://checkoutbundles.com/apis/offers.php?offer_id="+queryString.preview_id;
					if(queryString.preview_id == undefined){
						var RequestUrl = "https://checkoutbundles.com/apis/offers.php?product_id="+data.product.id;
					}
					
						$.ajax({
							url: RequestUrl,
							type: 'GET',
							crossDomain:true,
							dataType : "html",
							success: function(response){
								jQuery("._ADPBDL_PRODUCT_WRAPPER").html(response);
								//addBundleToCart(data.product.id);
							},
							error: function(err){
								//console.log(err);
							}
						 });
					});
				}
			
			var CartBundleObj = getCookie("CartBundleVal");
			//console.log(CartBundleObj);
			$(document).on('click', '#BundleAddBtn', function(){
				var rqD = $("#bundleprods").val();	
				var items_to_add = JSON.parse(rqD);
				var TotBundlePrice = 0;
				var OfferId = 0
				if(items_to_add[0].properties._ABUNDLE_SPECIALID != undefined){
					OfferId = items_to_add[0].properties._ABUNDLE_SPECIALID;
				}
				
				var commLookupId = "";
				var CartBundleObj = getCookie("CartBundleVal");
				if((CartBundleObj==null)||(CartBundleObj=="")){
					var CartBundleArr = [];
				}else{
					var CartBundleArr = JSON.parse(CartBundleObj);
				}
				
				var AddableToCart = [];
				$.each(items_to_add, function(i, bundleItem){
					//console.log(bundleItem);
				//console.log(items_to_add+" - "+bundleItem.additionalVals.discounted_price);
					TotBundlePrice = TotBundlePrice + (parseFloat(bundleItem.additionalVals.discounted_price));
					
					if(commLookupId==""){
						commLookupId = bundleItem.properties._ABUNDLE_SPECIALID;
					}else{
						commLookupId = commLookupId+"-"+ bundleItem.properties._ABUNDLE_SPECIALID;
					}
					var CartNewObj = {
						"id"  : bundleItem.id,
						"quantity"  : parseInt(bundleItem.quantity),
						"properties"  : {_ABUNDLE_SPECIALID:bundleItem.properties._ABUNDLE_SPECIALID}
					};
					CartNewObj.properties["Offer details"] = bundleItem.properties.OFFER_DETAIL;
					AddableToCart.push(CartNewObj);
				})
				CartBundleArr.push(commLookupId);
				var bundle_data = JSON.stringify(AddableToCart);
				//console.log(bundle_data);
				var RequestUrl = "https://checkoutbundles.com/shopify/app/getCartSettings.php";
				$.ajax({
					url: RequestUrl,
					type: 'POST',
					crossDomain:true,					
					data : {bundleData:bundle_data},
					dataType : "html",
					success: function(response){
						var parseVar = JSON.parse(response);
						window.location.href = parseVar.invoice_url;
					},
					error: function(err){
						//console.log(err);
					}
				 });
			})
			
			jQuery(document).on('change', '.andbdl_variant_options', function(){
				var Vallll = jQuery(this).val();
				var dataComparePrice = jQuery('option:selected', this).attr('data-compare-price');
				var dataSpecialId = jQuery('option:selected', this).attr('data-special-id');
				var dataNotes = jQuery('option:selected', this).attr('data-notes');
				var dataPrice = jQuery('option:selected', this).attr('data-price');
				var dataImage = jQuery('option:selected', this).attr('data-image');
				var dataQty = jQuery('option:selected', this).attr('data-qty');
				var dataProductId = jQuery('option:selected', this).attr('data-product-id');
				jQuery("#anbdl_final_price_"+dataProductId).html(parseFloat(dataPrice).toFixed(2));
				jQuery("#anbdl_org_price_"+dataProductId).html(parseFloat(dataComparePrice).toFixed(2));
				jQuery("#anbdl_image_"+dataProductId).attr("src", dataImage);
				
				var cartArr = [];
				
				
				var TotPrice = 0;
				var orgPrice = 0;
				var UniqueLookupId = guid();
								
				$(".andbdl_variant_options").each(function(){
					var thisPrice = jQuery('option:selected', this).attr('data-price');
					var thisDataNotes = jQuery('option:selected', this).attr('data-notes');
					var thisSpecialId = jQuery('option:selected', this).attr('data-special-id');
					var ThisValue = jQuery('option:selected', this).val();
					//console.log(thisPrice);
					TotPrice = TotPrice+parseFloat(thisPrice);
					var thisOrgPrice = jQuery('option:selected', this).attr('data-compare-price');
					var dataQty = jQuery('option:selected', this).attr('data-qty');
					orgPrice = orgPrice+parseFloat(thisOrgPrice);

					var CartObj = {
						"quantity" : parseInt(dataQty),
						"id"  : ThisValue,
						"properties"  : {_ABUNDLE_SPECIALID:thisSpecialId},
						"additionalVals"  : {discounted_price:parseFloat(thisPrice)*100}
					};
					CartObj.properties["OFFER_DETAIL"] = thisDataNotes;
					cartArr.push(CartObj);
					//, _ABUNDLE_LOOKUPID:UniqueLookupId
/* 					
					cartArr.push({
						"quantity" : parseInt(dataQty),
						"id"  : ThisValue,
						"properties"  : {_ABUNDLE_SPECIALID:thisSpecialId},
						"additionalVals"  : {discounted_price:parseFloat(thisPrice)*100}
					}); */
					
					//_ABUNDLE_LOOKUPID:UniqueLookupId, _ABUNDLE_TOTPRODUCTS:UniqueLookupId
				});
				
				$.each(cartArr, function(indx, cartArrItem){
					//console.log(cartArrItem);
				})
				var ReqObj = (JSON.stringify(cartArr));
				//console.log(ReqObj);
				jQuery("#bundleprods").val(ReqObj);
				jQuery("#anbdl_final_price").html(TotPrice.toFixed(2));
				
				jQuery("#anbdl_org_price").html(orgPrice.toFixed(2));
				jQuery(".anbdl_save_price").html((orgPrice-TotPrice).toFixed(2));
				var bogoProdPrice = jQuery("#bogo_prod_pricce").html();
				jQuery("#NewTotalPriceBogo").html((parseFloat(bogoProdPrice)+TotPrice).toFixed(2));
			})
					
			function sasoShopifyformatMoney(cents, format) {
    if (typeof cents == "undefined" || cents == null) {
        return ""
    }
    if (typeof cents == "string" && cents.length == 0) {
        return ""
    }
    /* if (typeof cents == "number" && window.saso_config.tax_percent > 0) {
        cents = cents * (1 + window.saso_config.tax_percent / 100)
    } */
    var value = "",
        placeholderRegex = /\{\{\s*(\w+)\s*\}\}/,
        formatString = format || this.money_format;
    if (typeof cents == "string") {
        cents = cents.replace(".", "")
    }

    function defaultOption(opt, def) {
        return typeof opt == "undefined" ? def : opt
    }

    function formatWithDelimiters(number, precision, thousands, decimal) {
			precision = defaultOption(precision, 2);
			thousands = defaultOption(thousands, ",");
			decimal = defaultOption(decimal, ".");
			if (isNaN(number) || number == null) {
				return 0
			}
			number = (number / 100).toFixed(precision);
			var parts = number.split("."),
				dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + thousands),
				cents = parts[1] ? decimal + parts[1] : "";
			return dollars + cents
		}
		switch (formatString.match(placeholderRegex)[1]) {
			case "amount":
				value = formatWithDelimiters(cents, 2);
				break;
			case "amount_no_decimals":
				value = formatWithDelimiters(cents, 0);
				break;
			case "amount_with_comma_separator":
				value = formatWithDelimiters(cents, 2, ".", ",");
				break;
			case "amount_no_decimals_with_comma_separator":
				value = formatWithDelimiters(cents, 0, ".", ",");
				break
		}
		return formatString.replace(placeholderRegex, value)
	}
			
	function num2decimal(num){
		return parseFloat(Math.round(num * 100) / 100).toFixed(2);
	}
					
					
					
					
					
					
					
					
					
					
					
					
					
				});
			});
	}else{
			if((Shopify.checkout!= undefined)){
				//var order_number = (jQuery(".os-order-number").text()).match(/\d+/)[0];
				//Shopify.checkout.page;
				var RequestUrl = "https://checkoutbundles.com/apis/offers.php?orderinfocapture=yes";
				$.ajax({
					url: RequestUrl,
					type: 'POST',
					crossDomain:true,
					data : {checkout_data:btoa(JSON.stringify(Shopify.checkout))},
					dataType : "html",
					success: function(response){							
						//var CartToAdded = JSON.parse(response);
						//console.log(response);
						//return false;							
					},
					error: function(err){
					}
				 });
			}
			
			jQuery(document).ready(function(){
			 //console.log("JAI SHRI RAM");
			})
			//console.log(Shopify);
			//console.log(window.saso);
			var root = location.protocol + '//' + location.host;		
			//alert(root + "/cart");

				if(window.location.href.indexOf("products") > -1){
				var currentURL = window.location.href.split('?')[0];
				
				var queryString = getUrlParams();
				//console.log(queryString.preview_id);
				//console.log(currentURL+".json");
				
				//$.get(currentURL+".json").success(function(data){
				$.get( currentURL+".json", function( data ) {
					//console.log(data.product.variants[0].price);
					localStorage.setItem("currentProductPrice", data.product.variants[0].price);
					//1440126861379
										
					var RequestUrl = "https://checkoutbundles.com/apis/offers.php?offer_id="+queryString.preview_id;
					if(queryString.preview_id == undefined){
						var RequestUrl = "https://checkoutbundles.com/apis/offers.php?product_id="+data.product.id;
					}
					
						$.ajax({
							url: RequestUrl,
							type: 'GET',
							crossDomain:true,
							dataType : "html",
							success: function(response){
								jQuery("._ADPBDL_PRODUCT_WRAPPER").html(response);
								//addBundleToCart(data.product.id);
							},
							error: function(err){
								//console.log(err);
							}
						 });
					});
				}
			
			var CartBundleObj = getCookie("CartBundleVal");
			//console.log(CartBundleObj);
			$(document).on('click', '#BundleAddBtn', function(){
				var rqD = $("#bundleprods").val();	
				var items_to_add = JSON.parse(rqD);
				var TotBundlePrice = 0;
				var OfferId = 0
				if(items_to_add[0].properties._ABUNDLE_SPECIALID != undefined){
					OfferId = items_to_add[0].properties._ABUNDLE_SPECIALID;
				}
				
				var commLookupId = "";
				var CartBundleObj = getCookie("CartBundleVal");
				if((CartBundleObj==null)||(CartBundleObj=="")){
					var CartBundleArr = [];
				}else{
					var CartBundleArr = JSON.parse(CartBundleObj);
				}
				
				var AddableToCart = [];
				$.each(items_to_add, function(i, bundleItem){
					//console.log(bundleItem);
				//console.log(items_to_add+" - "+bundleItem.additionalVals.discounted_price);
					TotBundlePrice = TotBundlePrice + (parseFloat(bundleItem.additionalVals.discounted_price));
					
					if(commLookupId==""){
						commLookupId = bundleItem.properties._ABUNDLE_SPECIALID;
					}else{
						commLookupId = commLookupId+"-"+ bundleItem.properties._ABUNDLE_SPECIALID;
					}
					var CartNewObj = {
						"id"  : bundleItem.id,
						"quantity"  : parseInt(bundleItem.quantity),
						"properties"  : {_ABUNDLE_SPECIALID:bundleItem.properties._ABUNDLE_SPECIALID}
					};
					CartNewObj.properties["Offer details"] = bundleItem.properties.OFFER_DETAIL;
					AddableToCart.push(CartNewObj);
				})
				
				CartBundleArr.push(commLookupId);
				var bundle_data = JSON.stringify(AddableToCart);
				//console.log(bundle_data);
				var RequestUrl = "https://checkoutbundles.com/shopify/app/getCartSettings.php";
				$.ajax({
					url: RequestUrl,
					type: 'POST',
					crossDomain:true,					
					data : {bundleData:bundle_data},
					dataType : "html",
					success: function(response){
						var parseVar = JSON.parse(response);
						window.location.href = parseVar.invoice_url;
					},
					error: function(err){
						//console.log(err);
					}
				 });
			})

			jQuery(document).on('change', '.andbdl_variant_options', function(){
				var Vallll = jQuery(this).val();
				var dataComparePrice = jQuery('option:selected', this).attr('data-compare-price');
				var dataSpecialId = jQuery('option:selected', this).attr('data-special-id');
				var dataNotes = jQuery('option:selected', this).attr('data-notes');
				var dataPrice = jQuery('option:selected', this).attr('data-price');
				var dataImage = jQuery('option:selected', this).attr('data-image');
				var dataQty = jQuery('option:selected', this).attr('data-qty');
				var dataProductId = jQuery('option:selected', this).attr('data-product-id');
				jQuery("#anbdl_final_price_"+dataProductId).html(parseFloat(dataPrice).toFixed(2));
				jQuery("#anbdl_org_price_"+dataProductId).html(parseFloat(dataComparePrice).toFixed(2));
				jQuery("#anbdl_image_"+dataProductId).attr("src", dataImage);
				
				var cartArr = [];
				
				
				var TotPrice = 0;
				var orgPrice = 0;
				var UniqueLookupId = guid();
								
				$(".andbdl_variant_options").each(function(){
					var thisPrice = jQuery('option:selected', this).attr('data-price');
					var thisDataNotes = jQuery('option:selected', this).attr('data-notes');
					var thisSpecialId = jQuery('option:selected', this).attr('data-special-id');
					var ThisValue = jQuery('option:selected', this).val();
					//console.log(thisPrice);
					TotPrice = TotPrice+parseFloat(thisPrice);
					var thisOrgPrice = jQuery('option:selected', this).attr('data-compare-price');
					var dataQty = jQuery('option:selected', this).attr('data-qty');
					orgPrice = orgPrice+parseFloat(thisOrgPrice);

					var CartObj = {
						"quantity" : parseInt(dataQty),
						"id"  : ThisValue,
						"properties"  : {_ABUNDLE_SPECIALID:thisSpecialId},
						"additionalVals"  : {discounted_price:parseFloat(thisPrice)*100}
					};
					CartObj.properties["OFFER_DETAIL"] = thisDataNotes;
					cartArr.push(CartObj);
					//, _ABUNDLE_LOOKUPID:UniqueLookupId
/* 					
					cartArr.push({
						"quantity" : parseInt(dataQty),
						"id"  : ThisValue,
						"properties"  : {_ABUNDLE_SPECIALID:thisSpecialId},
						"additionalVals"  : {discounted_price:parseFloat(thisPrice)*100}
					}); */
					
					//_ABUNDLE_LOOKUPID:UniqueLookupId, _ABUNDLE_TOTPRODUCTS:UniqueLookupId
				});
				
				$.each(cartArr, function(indx, cartArrItem){
					//console.log(cartArrItem);
				})
				var ReqObj = (JSON.stringify(cartArr));
				//console.log(ReqObj);
				jQuery("#bundleprods").val(ReqObj);
				/*jQuery("#anbdl_final_price").html(TotPrice.toFixed(2));				
				jQuery("#anbdl_org_price").html(orgPrice.toFixed(2));
				jQuery(".anbdl_save_price").html((orgPrice-TotPrice).toFixed(2));*/
				
				var BundleType = jQuery("#chkbdl_bdl_type").val();
				//console.log(BundleType);
				if(BundleType=='Fixed'){
					jQuery("#anbdl_org_price").html(orgPrice.toFixed(2));
					//jQuery("#anbdl_final_price").html(TotPrice.toFixed(2));	
					var bdlFinalPrice = parseFloat(jQuery(".anbdl_save_price").html());
					//console.log(orgPrice+" "+bdlFinalPrice);
					jQuery("#anbdl_final_price").html((orgPrice-bdlFinalPrice).toFixed(2));					
				}else{
					jQuery("#anbdl_final_price").html(TotPrice.toFixed(2));				
					jQuery("#anbdl_org_price").html(orgPrice.toFixed(2));
					jQuery(".anbdl_save_price").html((orgPrice-TotPrice).toFixed(2));
				}
				
				
				var bogoProdPrice = jQuery("#bogo_prod_pricce").html();
				jQuery("#NewTotalPriceBogo").html((parseInt(bogoProdPrice)+TotPrice).toFixed(2));
			})
			
			function sasoShopifyformatMoney(cents, format) {
    if (typeof cents == "undefined" || cents == null) {
        return ""
    }
    if (typeof cents == "string" && cents.length == 0) {
        return ""
    }
    /* if (typeof cents == "number" && window.saso_config.tax_percent > 0) {
        cents = cents * (1 + window.saso_config.tax_percent / 100)
    } */
    var value = "",
        placeholderRegex = /\{\{\s*(\w+)\s*\}\}/,
        formatString = format || this.money_format;
    if (typeof cents == "string") {
        cents = cents.replace(".", "")
    }

    function defaultOption(opt, def) {
        return typeof opt == "undefined" ? def : opt
    }

    function formatWithDelimiters(number, precision, thousands, decimal) {
			precision = defaultOption(precision, 2);
			thousands = defaultOption(thousands, ",");
			decimal = defaultOption(decimal, ".");
			if (isNaN(number) || number == null) {
				return 0
			}
			number = (number / 100).toFixed(precision);
			var parts = number.split("."),
				dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + thousands),
				cents = parts[1] ? decimal + parts[1] : "";
			return dollars + cents
		}
		switch (formatString.match(placeholderRegex)[1]) {
			case "amount":
				value = formatWithDelimiters(cents, 2);
				break;
			case "amount_no_decimals":
				value = formatWithDelimiters(cents, 0);
				break;
			case "amount_with_comma_separator":
				value = formatWithDelimiters(cents, 2, ".", ",");
				break;
			case "amount_no_decimals_with_comma_separator":
				value = formatWithDelimiters(cents, 0, ".", ",");
				break
		}
		return formatString.replace(placeholderRegex, value)
	}
			
	function num2decimal(num){
		return parseFloat(Math.round(num * 100) / 100).toFixed(2);
	}
}

function guid() {
  return "ss-s-s-s-sss".replace(/s/g, s4);
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

function getUrlParams( prop ) {
    var params = {};
    var search = decodeURIComponent( window.location.href.slice( window.location.href.indexOf( '?' ) + 1 ) );
    var definitions = search.split( '&' );

    definitions.forEach( function( val, key ) {
        var parts = val.split( '=', 2 );
        params[ parts[ 0 ] ] = parts[ 1 ];
    } );

    return ( prop && prop in params ) ? params[ prop ] : params;
}

function setCookie(cname,Value){
	var d = new Date();
		d.setTime(d.getTime() + (30*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
		var cookiepath = "/"; // accessible from every web page of the domain
		document.cookie = cname+" = "+Value+";" + expires + ";path=" + cookiepath;
}

function getCookie(cname){
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}