import React from "react";
import { useEffect } from "react";

const MyHTMLComponent = () => {
  var registration;

  useEffect(() => {
    window.addEventListener(
      "load",
      function () {
        function webpushInit() {
          console.log("funcion webpushInit");
          if ("serviceWorker" in navigator) {
            // TODO: Se debe permitir que el service worker venga de cualquier lado
            // de momento solo acepta el que este ahi mismo en este caso http://127.0.0.1:5500/
            const serviceWorkerURL = "https://www.etniaavl/sw.js";

            navigator.serviceWorker
              .register(serviceWorkerURL)
              .then((register) => {
                initilizeState(register);
              })
              .catch((error) => {
                console.error("Error al registrar el Service Worker:", error);
              });
          }
        }
        webpushInit();
      },
      []
    );

    function initilizeState(register) {
      if (!register.showNotification) {
        return;
      }
      if (Notification.permission === "denied") {
        return;
      }
      if (!("PushManager" in window)) {
        return;
      }
      subscribe(register);
    }
  });

  function getSubscription(register) {
    return register.pushManager
      .getSubscription()
      .then((subscription) => {
        if (subscription) {
          return subscription;
        }

        const applicationServerKey =
          "BBRcFbq9xg2NP6hOe6J2NUaqpeqMXg0gOfUfC3xBQ5eT9-yDwKk-FsjpHF3BXg8HRfVRe2cSXBkgaKbCrkmLoVA";

        let options = {
          userVisibleOnly: true,
          applicationServerKey,
        };
        return register.pushManager.subscribe(options);
      })
      .catch((error) => {
        console.error("ERROR | 092345 | getSubscription: ", error);
      });
  }

  function subscribe(register) {
    getSubscription(register)
      .then((subscription) => {
        sendSubscription("subscribe", subscription);
      })
      .catch((error) => console.error("ERROR | 456213 | subscribe: ", error));
  }
  function unsubscribe() {
    registration.pushManager.getSubscription().then(function (subscription) {
      if (!subscription) {
        return;
      }
      postSubscribeObj("unsubscribe", subscription);
    });
  }

  function sendSubscription(statusType, subscription) {
    var browser = navigator.userAgent
      .match(/(firefox|msie|chrome|safari|trident)/gi)[0]
      .toLowerCase();
    var data = {
      status_type: statusType,
      subscription: subscription.toJSON(),
      browser: browser,
      group: null, //subBtn.dataset.group
      company: "1",
      external_id: "",
      template_id: "a2336030e00bc3073f7e565283dd567531609870",
    };

    fetch(
      "https://testingcrmgestion.siesaecommerce.com/entry_point/save_push_subscription/",
      {
        method: "post",
        headers: {
          "Content-Type": "text/plain;charset=UTF-8",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => {
        if (response.status == 201 && statusType == "subscribe") {
          console.log("PUSH ENEABLE: TRUE");
        }
        if (response.status == 202 && statusType == "unsubscribe") {
          getSubscription(registration).then((subscription) => {
            subscription.unsubscribe().then((successful) => {});
          });
        }
      })
      .catch((error) => {
        console.error("ERROR | 434254 | sendSubscription: ", error);
      });
  }
  const myHTMLContent = `
  <div class="u_body" id="u_body" style="min-height: 100vh;">
  <div class="u_row" id="u_row_1" style="padding: 0px;">
   <div class="container" style="max-width: 500px;margin: 0 auto;">
    <div class="u-row">
     <div class="u-col u-col-100 u_column" id="u_column_1" style="display:flex;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;">
      <div style="width: 100%;padding:0px;">
       <div class="u_content_form" id="u_content_form_1" style="overflow-wrap: break-word;padding: 10px;">
        <div style="text-align:center">
         <form action="https://testingcrmgestion.siesaecommerce.com/entry_point/pma_landing_page_save_form/" class="v-form-width-width" method="POST" style="display:inline-block;width:100%;box-sizing:border-box" target="_self">
          <div class="sc-jEACwC wZTDr" color="#000">
           <div style="padding-bottom:10px">
            <div style="text-align:left;color:#444;font-size:14px;padding:0px 0px 3px">
             <label>
              Empresa
             </label>
            </div>
            <div style="position:relative">
             <input name="company_name" placeholder="Empresa" style="border-top-width:1px;border-top-style:solid;border-top-color:#CCC;border-left-width:1px;border-left-style:solid;border-left-color:#CCC;border-right-width:1px;border-right-style:solid;border-right-color:#CCC;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:#CCC;border-radius:0px;padding:10px;color:#000;background-color:#FFF;font-size:12px;width:100%" type="text"/>
            </div>
           </div>
          </div>
          <div style="text-align:center">
           <button style="border:none;border-radius:4px;display:inline-block;text-align:center;overflow:hidden;cursor:pointer;text-decoration:none;padding:10px;margin:5px 0px 0px;font-size:14px;width:100%;color:#FFF;background-color:#3AAEE0" type="submit">
            Submit
           </button>
          </div>
          <input name="id_template" type="hidden" value="a2336030e00bc3073f7e565283dd567531609870"/>
         </form>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>
  `;

  return <div dangerouslySetInnerHTML={{ __html: myHTMLContent }} />;
};

export default MyHTMLComponent;
