const _ = require("lodash")

const contactEmailTemplate = _.template(`
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <title>Newsletter</title>
    <style type="text/css">
      * {
        font-family: "Montserrat", sans-serif;
      }
      p {
        /* Fallback paragraph style */
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        margin: 0;
        text-decoration: none;
        color: #17181c;
      }
      h3 {
        font-size: 16px;
        line-height: 24px;
        font-style: normal;
        font-weight: 600;
        text-decoration: none;
        color: #ff9899;
      }
      span {
        font-weight: 600;
      }
    </style>
  </head>
  <body
    style="
      margin: 0;
      padding-left: 0;
      padding-right: 0;
      font-family: Montserrat, sans-serif;
      -webkit-text-size-adjust: 100%;
      background-color: #f7f7f8;
    "
    align="center"
  >
    <!-- Fallback force center content -->
    <div>
      <table
        align="center"
        style="
          text-align: center;
          vertical-align: top;
          max-width: 540px;
          border-spacing: 15px 0px;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid #ebecef;
          background-color: #ffffff;
        "
        width="100%"
      >
        <tbody>
          <tr>
            <td align="center" style="padding: 0; width: 24px">
              <!-- Your logo is here -->
              <img
                src="https://asset.brandfetch.io/id8z35-SXX/idaaeOQCTE.png"
                alt="logo"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <table
        align="center"
        style="
          vertical-align: top;
          padding: 0.25rem 2rem;
          border-spacing: 0px 1.5rem;
          max-width: 540px;
          background-color: #ffffff;
        "
        width="100%"
      >
        <tbody align="center">
          <tr>
            <td style="vertical-align: top" width="100%">
              <p>
              <%= name %> just send a contact message
              </p>
              <p>
              Email : <%= email %>
              </p>
              <p>
               Phone Number:  <%= phone %>
              </p>
              <p>
              Message: <%= message %>
              </p>
            </td>
          </tr>
          <tr>
            <td>
            
            </td>
          </tr>
        </tbody>
      </table>
      <!-- End single column section -->
    </div>
  </body>
</html>
`);
module.exports = contactEmailTemplate;