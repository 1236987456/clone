using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using WAdmin.wap;

namespace WAdmin.home.game1
{
    public partial class index : wxpage//System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string fopenid=Request["openid"];

            if (openid==fopenid)
            {

            }
            else
            {
                Response.Redirect("https://www.wegogo.net.cn/Q2/home/index.aspx");
            }
        }
    }
}