import express, { Request, Response, NextFunction } from 'express';
import * as _ from 'lodash';
import git from './git';

const app = express();


app.get('/welcome', (req: Request, res: Response, next: NextFunction) => {
    res.send('welcome!');
});

app.get('/test', (req: Request, res: Response, next: NextFunction) => {
    res.send(git.test());
});

app.get('/log', async (req: Request, res: Response, next: NextFunction) => {
    const _log = await git.getLogs();
    
    res.send(
        _log.all
    );
});

app.get('/branch', async (req: Request, res: Response, next: NextFunction) => {
    const _branch = await git.getBranch(['-a']);
    res.send( _branch.all);
});


app.listen('1234', () => {
    console.log(`
  ################################################
  🛡️  Server listening on port: 1234🛡️
  ################################################
`);
});