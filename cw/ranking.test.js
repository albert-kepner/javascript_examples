class User {
    constructor() {
        this.rank = -8;
        this.progress = 0;
        this.ranks = [];
        for(let i = -8; i <= 8; i++) {
            if (i != 0) {
                this.ranks.push(i);
            }
        }
    }

    rankDiff(taskRank) {
        const userIndex = this.ranks.indexOf(this.rank);
        const taskIndex = this.ranks.indexOf(taskRank);
        return taskIndex - userIndex;
    }

    newProgress(taskRank) {
        const delta = this.rankDiff(taskRank);
        if(delta < -1) return 0;
        if(delta == -1) return 1;
        if(delta == 0) return 3;
        return 10 * delta * delta;
    }

    incProgress(taskRank) {
        if(taskRank < -8) throw new Error('bad input');
        if(taskRank == 0) throw new Error('bad input');
        if(taskRank > 8) throw new Error('bad input');
        if(this.rank == 8) {
            this.progress = 0;
            return;
        }
        const change = this.newProgress(taskRank);
        this.progress = this.progress + change;
        while (this.progress >= 100 && this.rank < 8) {
            this.progress = this.progress - 100;
            this.rank = this.rank+1;
            if(this.rank == 0) this.rank = this.rank + 1;
            if(this.rank == 8) {
                this.progress = 0;
                return;
            }
        }
    }
}

describe('ranks', () =>{
    test('rank1',() => {
        var user = new User();
        expect(user.rank).toBe(-8);
        expect(user.progress).toBe(0);
        user.incProgress(-8);
        expect(user.progress).toBe(3);
    });

    test('rank2', () => {
        var user = new User();
        user.incProgress(2);
        expect(user.rank).toBe(1);
    });

    it('rank3', () => {
        var user = new User();
        user.incProgress(2);
        expect(user.rank).toBe(1);
    });
    
});