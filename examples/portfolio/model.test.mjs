import test from 'node:test';
import assert from 'node:assert/strict';
import * as m from './model.mjs';
test('workflow invariants and boundary cases',()=>{
const c=[{Key:'e',Skill:'s',SkillDisplay:'S',SkinName:'E',Pairs:[{Base:'base',Mtx:'replacement'}]}];assert.equal(m.plan(c,'s','e').valid,true);assert.equal(m.plan(c,'wrong','e').valid,false);assert.deepEqual(m.plan(c,'wrong','e').pairs,[]);assert.equal(m.plan(c,'s','missing').valid,false);
});
