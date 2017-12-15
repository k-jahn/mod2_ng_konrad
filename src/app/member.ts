export class Member {
    constructor(raw) {
        this.setVals(raw);
    }
    first_name: string;
    middle_name: string;
    last_name: string;
    full_name: string;
    party: string;
    state: string;
    url: string;
    party_votes: number;
    total_votes: number;
    seniority: number;
    votes_with_party_pct: number;



    setVals(raw: Object) {
        // set properties from raw input
        for (let k in raw) {
            this[k] = raw[k];
        }
        // calculate inferred properties
        this.full_name = [this.first_name, this.middle_name, this.last_name].join(' ');
        this.party_votes = Math.round(this.total_votes * this.votes_with_party_pct / 100)
    }
}
