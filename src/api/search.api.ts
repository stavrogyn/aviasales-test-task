import { TicketsInterface } from '../state/state.type'

interface SearchApiInterface {
    getSearchId: () => void;
    sendInitialRequest: () => Promise<Record<string, string>>;
    getTickets: () => Promise<Array<TicketsInterface | boolean>>
    sendResultRequest: () => Promise<Record<string, TicketsInterface | boolean>>
}

export default class SearchApi implements SearchApiInterface {
    private initialURL: string
    private resultURL: string
    private searchId: string = ''

    constructor (private readonly host: string | undefined = process.env.REACT_APP_HOST, private retries: number = 5) {
        this.initialURL = `${this.host}/search`;
        this.resultURL = `${this.host}/tickets`;
    } 

    getSearchId: () => void = async () => {
        try {
            const { searchId } = await this.sendInitialRequest()
            return this.searchId = searchId;
        } catch (error) {
            this.retries --;
            if (this.retries) {
                return this.getSearchId()
            }
        }
    }

    sendInitialRequest = async (): Promise<Record<string, string>> => {
        const response = await fetch(this.initialURL)
        if (!response.ok) {
            throw new Error('Response was not okey');
        }
        return response.json()
    }

    getTickets: () => Promise<Array<TicketsInterface | boolean>> = async () => {
        try {
            const { tickets, stop } = await this.sendResultRequest()
            return [tickets, stop]
        } catch (error) {
            this.retries --;
            if (this.retries) {
                return this.getTickets()
            } 
            else {
                return [[], true]
            }
        }
    }

    sendResultRequest: () => Promise<Record<string, TicketsInterface | boolean>> = async () => {
        const response = await fetch(this.resultURL + '?' + new URLSearchParams({ searchId: this.searchId}))
        if (!response.ok) {
            throw new Error('Response was not okey');
        }
        return response.json()
    }

}