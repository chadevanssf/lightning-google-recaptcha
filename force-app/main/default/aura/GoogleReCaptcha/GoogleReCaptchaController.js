({
    doInit: function (component, event, helper) {
        var vfOrigin = "https://customer-connect-9256-dev-ed--c.visualforce.com";
        
        window.addEventListener("message", function (event) {
            if (event.origin !== vfOrigin) {
                // Not the expected origin: Reject the message!
                return;
            }
            
            if (event.data.action === "reCaptchaCallingAura") {
                if (event.data.alohaResponseCAPTCHA === "NOK") {
                    console.log("Failed to do the reCAPTCHA");
                } else if (event.data.alohaResponseCAPTCHA === "OK") {
                    helper.sendEvent(component);
                }
            }
            if (event.data.action === "auraCallingReCaptcha") {
                if (event.data.alohaResponseCAPTCHA === "NOK") {
                    console.log("Please do the reCAPTCHA before submit!");
                } else if (event.data.alohaResponseCAPTCHA === "OK") {
                    helper.acknowledgeSubmit(component);
                }
            }
        }, false);
    },
    
    submitSomething: function (component, event, helper) {
        var message = "auraCallingReCaptcha";
        var vfOrigin = "https://customer-connect-9256-dev-ed--c.visualforce.com";
        var vfWindow = component.find("vfFrame").getElement().contentWindow;
        vfWindow.postMessage(
            {
                action: "auraCallingReCaptcha"
            },
            vfOrigin
        );
        
    }
})