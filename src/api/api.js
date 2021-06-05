export default class ApiFetcher {
    constructor (host = 'https://front-test.beta.aviasales.ru', retries = 5) {
        this.host = host;
        this.initialURL = `${this.host}/search`;
        this.resultURL = `${this.host}/tickets`;
        this.retries = retries;
        this.searchId = ''
    }

    getSearchId = async () => {
        try {
            const { searchId } = await this.sendInitialRequest()
            return this.searchId = searchId;
        } catch (error) {
            this.retries --;
            if (this.retries) {
                return this.startSearch()
            } 
            else {
                throw new Error('Please check your internet connection')
            }
        }
    }

    sendInitialRequest = async () => {
        const response = await fetch(this.initialURL)
        if (!response.ok) {
            throw new Error('Response was not okey');
        }
        return response.json()
    }

    getTickets = async () => {
        try {
            const { tickets, stop } = await this.sendResultRequest()
            return [tickets, stop]
        } catch (error) {
            this.retries --;
            if (this.retries) {
                return this.sendResultRequest()
            } 
            else {
                throw new Error('Please check your internet connection')
            }
        }
    }

    sendResultRequest = async () => {
        const response = await fetch(this.resultURL + '?' + new URLSearchParams({ searchId: this.searchId}))
        if (!response.ok) {
            throw new Error('Response was not okey');
        }
        return response.json()
    }

}