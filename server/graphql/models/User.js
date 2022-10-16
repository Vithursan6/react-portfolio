const user = require("../../database/models/user");



class User {
    constructor(model) {
        this.Model = model;
    }

    async signUp(signUpData) {
        
        if (signUpData.password !== signUpData.passwordConfirmation) {
            throw new Error('Password must match password confirmation input!');
        }
        try {
            return await this.Model.create(signUpData);
        } catch(e) {
            if (e.code && e.code === 11000) {
            throw new Error('Email Already Exists!!');
            }

            throw e;
        }

    }

    async signIn(signInData, ctx) {
        try {

            const user = await ctx.authenticate(signInData);
            console.log(user);
            return user;

        } catch(error) {

            return error;

        }
        
    }



    signOut(ctx) {
        try {
            ctx.logout();
            return true;
        } catch(e) {
            return false;
        }
    }


}

module.exports = User;