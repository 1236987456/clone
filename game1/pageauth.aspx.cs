using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using WDAL.DBClass;
using WModel;
using WModel.wxcommon;

namespace WAdmin.home.game1
{
    public partial class pageauth : System.Web.UI.Page
    {
        DBSM dblinq = new DBSM();
        protected void Page_Load(object sender, EventArgs e)
        {
            d_Config model = dblinq.Getd_Config().SingleOrDefault(q => q.w_companyid == 1);
            string code = WCommon.HDCommon.GetParam("code");
            if (string.IsNullOrEmpty(code))
            {
                string RedirectUri = HttpContext.Current.Request.Url.ToString();//snsapi_base  snsapi_userinfo
                string URL = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + model.appid.Trim() + "&redirect_uri=" + RedirectUri + "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
                HttpContext.Current.Response.Redirect(URL);
            }
            else
            {
                //string linkurl =HDCommon.GetParamto("linkurl");
                Wxcodeaccess_token wx_tk = WxTools.GetTtoken(code, model.appid.Trim(), model.appsecret);
                WxUserInfo wxuser = WxTools.WxscopeUserinfo(wx_tk.access_token, wx_tk.openid);
                HttpContext.Current.Session["openid"] = wx_tk.openid;
                //HttpContext.Current.Session["wxuser"] = wxuser;
                dataclass.wxuserlogo(wxuser);
                //HDCommon.JSONOutput(wxuser);
                string linkurl = Session["linkurl"].ToString();
                HttpContext.Current.Response.Redirect(linkurl);
                //HttpContext.Current.Response.Redirect("lecturer.aspx");
            }
        }
    }
}