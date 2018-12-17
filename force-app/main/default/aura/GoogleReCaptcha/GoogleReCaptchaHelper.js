({
    sendEvent: function(component) {
        var reCaptchaEvent = component.getEvent("reCaptchaEvent");
        if (reCaptchaEvent) {
            reCaptchaEvent.setParams({
                "passed": "true"
            });
            reCaptchaEvent.fire();
        } else {
            console.log("reCAPTCHA Success");
        }
    },
    
    acknowledgeSubmit: function(component) {
        /*
        var urlEvent = $A.get("e.force:navigateToURL");
        if (urlEvent) {
            urlEvent.setParams ({
                "url": vfOrigin + "/login/"
            });
            urlEvent.fire();
        }
        */
        
        var toastEvent = $A.get("e.force:showToast");
        if (toastEvent) {
            toastEvent.setParams({
                "title": "reCAPTCHA Success",
                "message": "Captured your reCAPTCHA response",
                "type": "success"
            });
            toastEvent.fire();
        } else {
            console.log("reCAPTCHA Success");
        }
    }
})