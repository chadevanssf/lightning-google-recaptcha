public class GoogleReCaptchaController
{
    private final String sitekey;
    private final String hosturl;
    
    public GoogleReCaptchaController() {
        sitekey = ApexPages.currentPage().getParameters().get('sitekey');
        hosturl = ApexPages.currentPage().getParameters().get('hosturl');
    }
    
    public String getSitekey() {
        return sitekey;
    }
    
    public String getHostUrl() {
        return hosturl;
    }
}