export { Sniper }

import { Actor } from "../Actor";
import { Scene2D, Vertex, SpriteSet } from "engineer-js";
import { Weapon } from "../Weapon";
import { Projectile } from "../Projectile";

class Sniper extends Actor {

    public Init(Scene: Scene2D, Location: Vertex)
    {
        super.Init(Scene, Location)
        this.Health = 80;
        this.Weapon = new Weapon(Scene, 50, new Projectile(null, 3, 100));
        if(!Sniper.Sets) Sniper.InitSets();
        this.SpriteSets = Sniper.Sets;
        this.SetSpriteSetByName('idle');  
    }
    private static Sets:Engineer.SpriteSet[];
    private static InitSets()
    {
        let Walking = new SpriteSet(null, 'walking', [
            '/Resources/Textures/Actors/sniper01_01.png',
             '/Resources/Textures/Actors/sniper01_02.png'
        ])

        Walking.Seed = 5;

        let Idle = new SpriteSet(null, 'idle', [
                '/Resources/Textures/Actors/sniper01_01.png',
            ])
        
            Sniper.Sets = [Walking, Idle];
    }
}