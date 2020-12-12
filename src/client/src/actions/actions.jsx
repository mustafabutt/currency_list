import T from '../constants/types';
import S from '../constants/system';
import 'isomorphic-fetch';


export const getItemsList = () => dispatch => {
  fetch(S.GET_PRODUCTS).then((body) => {
    return body.json()
      .then((myJson) => {
        dispatch({
          type:T.DATA.GET_PRODUCTS,
          payload:{data:myJson}
        });
      });
  })
};

export const getCurrencyList = () => dispatch => {
    fetch(S.GET_CURRENCIES).then((body) => {
        return body.json()
            .then((myJson) => {
                dispatch({
                    type:T.DATA.GET_CURRENCIES,
                    payload:{data:myJson}
                });
            });
    })
};
export const getIp = () => dispatch => {
    fetch(S.GET_IP).then((body) => {
        return body.json()
            .then((myJson) => {
                dispatch({
                    type:T.DATA.GET_IP,
                    payload:{data:myJson}
                });
            });
    })
    
    // setTimeout(()=>{
    //     dispatch({
    //         type:T.DATA.GET_IP,
    //         payload:{data:{"ip":"39.49.54.174","version":"IPv4","city":"Gujranwala","region":"Punjab","region_code":"PB","country":"PK","country_name":"Pakistan","country_code":"PK","country_code_iso3":"PAK","country_capital":"Islamabad","country_tld":".pk","continent_code":"AS","in_eu":false,"postal":"38850","latitude":32.1617,"longitude":74.1883,"timezone":"Asia/Karachi","utc_offset":"+0500","country_calling_code":"+92","currency":"PKR","currency_name":"Rupee","languages":"ur-PK,en-PK,pa,sd,ps,brh","country_area":803940,"country_population":212215030,"asn":"AS17557","org":"Pakistan Telecommunication Company Limited"}}
    //     });
    //
    // },500)
};
