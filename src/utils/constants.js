
export const redboxApiServer = "https://api.wikiaboutme.org";
export const ssoServer = "https://sso.wikiaboutme.org/";
export const socketUrl = "";
export const PAGE_QUERY_PARAM_KEY = "&pageNo=";

export const GET = "GET";
export const POST = "POST";

export const AUTH_TOKEN = "x-auth";
export const ACCESS_TOKEN = "a-token";
export const MESSAGE_SETTING_KEY = 'message_setting';

export const LOGIN_URL = "/";
export const REDBOX_MESSAGE_URL = "/redbox";

export const TWITTER_SOURCE = "twitter";

export const REDBOX_MESSAGE_SETTING = {
    IN: {
        GLOBAL: {
            url: '/message',
            reqParams: { 'region': 'IN', 'category': 'Global' },
            channel: 'IN_Global',
            display: 'GLOBAL'
        },
        COMMODITIES: {
            url: '/message',
            reqParams: { 'region': 'IN', 'category': 'Commodities' },
            channel: 'IN_Commodities',
            display: 'COMMODITIES'
        },
        ALL_NEWS: {
            url: '/message',
            reqParams: { 'region': 'IN', 'category': 'Default' },
            channel: 'IN_ALL',
            display: 'ALL NEWS'
        },
        BLOCK_DETAILS: {
            url: '/message',
            reqParams: { 'region': 'IN', 'category': 'Block_Details' },
            channel: 'IN_Block_Details',
            display: 'BLOCK DETAILS'
        },
        FIXED_INCOME: {
            url: '/message',
            reqParams: { 'region': 'IN', 'category': 'Fixed_income' },
            channel: 'IN_Fixed_income',
            display: 'FIXED INCOME'
        }
    },
    GLOBAL: {
        GLOBAL: {
            url: '/message',
            reqParams: { 'region': 'GLOBAL', 'category': 'Global' },
            channel: 'GLOBAL_Global',
            display: 'GLOBAL'
        },
        COMMODITIES: {
            url: '/message',
            reqParams: { 'region': 'GLOBAL', 'category': 'Commodities' },
            channel: 'GLOBAL_Commodities',
            display: 'COMMODITIES'
        },
        ALL_NEWS: {
            url: '/message',
            reqParams: { 'region': 'GLOBAL', 'category': 'Default' },
            channel: 'GLOBAL_ALL',
            display: 'ALL NEWS'
        },
        BLOCK_DETAILS: {
            url: '/message',
            reqParams: { 'region': 'GLOBAL', 'category': 'Block_Details' },
            channel: 'GLOBAL_Block_Details',
            display: 'ANALYSIS'
        },
        FIXED_INCOME: {
            url: '/message',
            reqParams: { 'region': 'GLOBAL', 'category': 'Fixed_income' },
            channel: 'GLOBAL_Fixed_income',
            display: 'FIXED INCOME'
        }
    }
}