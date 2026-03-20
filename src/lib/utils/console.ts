import { derived, writable } from 'svelte/store';
import { browser } from '$app/environment';
import { Account, Client, Teams } from '@appwrite.io/console';
import { Query, type Models } from '@appwrite.io/console';
import { env as publicEnv } from '$env/dynamic/public';
// import {PUBLIC_APPWRITE_ENDPOINT} from '$env/static/public';


const client = new Client();

const endpoint = publicEnv.PUBLIC_APPWRITE_ENDPOINT ?? 'https://api.indobase.in/v1';

// Guard for SSR
if (endpoint) {
    client.setEndpoint(endpoint).setProject('console');
}

const account = new Account(client);
const teams = new Teams(client);

const BillingPlan = {
    STARTER: 'tier-0',
    PRO: 'tier-1',
    SCALE: 'tier-2'
} as const;

const ASCII_ART = `
   _                            _ _       
  /_\\  _ __  _ ____      ___ __(_) |_ ___ 
 //_\\\\| '_ \\| '_ \\ \\ /\\ / / '__| | __/ _ \\
/  _  \\ |_) | |_) \\ V  V /| |  | | ||  __/
\\_/ \\_/ .__/| .__/ \\_/\\_/ |_|  |_|\\__\\___|
      |_|   |_|                           
`;

export function displayHiringMessage() {
    if (browser) {
        console.log('%c' + ASCII_ART, 'font-family: monospace; white-space: pre; color: #ff9933;');
        console.log(
            '%cWe are hiring!',
            'font-family: Aeonik Pro, -apple-system, BlinkMacSystemFont, sans-serif; font-size: 20px; font-weight: bold;'
        );
        console.log(
            '%cJoin us in building the open-source, all-in-one development platform',
            'font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif; font-size: 14px;'
        );
        console.log(
            '%cCheck out our open positions at https://indobase.in/careers',
            'font-family: monospace; color: #666;'
        );
    }
}

export async function createSource(
    ref: string | null,
    referrer: string | null,
    utmSource: string | null,
    utmCampaign: string | null,
    utmMedium: string | null
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
    const path = `/console/sources`;
    const params = {
        ref,
        referrer,
        utmSource,
        utmCampaign,
        utmMedium
    };
    const SAFE_ENDPOINT = endpoint;

    // const uri = new URL(client.config.endpoint + path);
    if (!SAFE_ENDPOINT) return null;

const uri = new URL(SAFE_ENDPOINT + path);


    return await client.call(
        'POST',
        uri,
        {
            'content-type': 'application/json'
        },
        params
    );
}

export async function isProUser() {
    try {
        const orgs = await teams.list([Query.equal('billingPlan', BillingPlan.PRO)]);
        return orgs?.teams?.length > 1;
    } catch {
        return false;
    }
}

export const sdk = { client, account };

export type IndobaseUser = Models.User<Models.Preferences>;
function isIndobaseUser(user: unknown): user is IndobaseUser {
    return typeof user === 'object' && user !== null && '$id' in user;
}

export async function getIndobaseUser(): Promise<IndobaseUser | null> {
    return await account
        .get()
        .then((res) => res)
        .catch(() => null);
}

function createIndobaseUser() {
    const { subscribe, set: _set } = writable<IndobaseUser | null>(null);

    function set(v: IndobaseUser | null) {
        if (v) {
            localStorage.setItem('indobase:user', JSON.stringify(v));
        } else {
            localStorage.removeItem('indobase:user');
        }
        _set(v);
    }

    if (browser) {
        const localUser = JSON.parse(localStorage.getItem('indobase:user') ?? 'null');
        if (isIndobaseUser(localUser)) _set(localUser);
        getIndobaseUser().then((res) => {
            set(res);
        });
    }

    return {
        subscribe
    };
}

export const user = createIndobaseUser();
export const loggedIn = derived(user, ($user) => $user !== null);
