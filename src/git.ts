import {
    simpleGit
    , SimpleGit
    , DefaultLogFields
} from 'simple-git'

const _git: SimpleGit = simpleGit();

const git = { 
    test: () =>{
        return simpleGit()
            .add('./*')
            .commit('first commit!')
            .addRemote('origin', 'some-repo-url')
            .push( ['-u', 'origin', 'main'], () => 'done');
    }, 

    getLogs: async () => {
        return await _git.log();
    },

    getBranch: async (option:string[]) => {
        return await _git.branch(option);
    },

    createBranch: async (option?:string[]) => {
        return await _git.checkout([])
    },

    deletebranch: async (name:string, option?:string[]) => {
        return await _git.branch(['-D'])
    },

    checkout: async (option:string[]) => {
        return await _git.checkout()
    }



}

export default git
