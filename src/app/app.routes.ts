import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BankingPageComponent } from './banking-page/banking-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DemoPage1Component } from './demo-page-1/demo-page-1.component';
import { DemoPage2Component } from './demo-page-2/demo-page-2.component';
import { ComparisonBotComponent } from './conventional-bot/comparison-bot/comparison-bot.component';
// import { ArayanComponent } from './agentic-ai-bot/agentic-ai-bot/arayan/arayan.component';
import {  serenaComponent } from './agentic-ai-bot/agentic-ai-bot/Aanya/serena.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AgenticAiLandingComponent } from './agentic-ai-landing/agentic-ai-landing.component';
import { ReenaComponent } from './agentic-ai-bot/agentic-ai-bot/Reva/reena.component';
import { SandraComponent } from './agentic-ai-bot/agentic-ai-bot/Tanvi/sandra.component';
import { MaxComponent } from './agentic-ai-bot/agentic-ai-bot/Yash/max.component';
import { JuliComponent } from './agentic-ai-bot/agentic-ai-bot/Vidhi/juli.component';
import { ConvantionalAiLandingComponent } from './convantional-ai-landing/convantional-ai-landing.component';
import { ChatBotComponent } from './conventional-bot/chat-bot/chat-bot.component';
import { AudioBotComponent } from './conventional-bot/audio-bot/audio-bot.component';
import { HelthcareComponent } from './conventional-bot/helthcare/helthcare.component';
import { HospitalityComponent } from './conventional-bot/hospitality/hospitality.component';
import { MediaComponent } from './conventional-bot/media/media.component';
import { RetailsComponent } from './conventional-bot/retails/retails.component';
import { GenerativeAiLandingComponent } from './generative-ai-landing/generative-ai-landing.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
        { path: 'home-page', component: HomePageComponent },
     { path: 'agentic-ai-landing', component: AgenticAiLandingComponent },
     { path: 'conventional-ai-landing', component: ConvantionalAiLandingComponent },
    { path: 'generative-ai-landing', component: GenerativeAiLandingComponent },



    { path: 'landing', component: LandingPageComponent },
    { path: 'banking', component: BankingPageComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'demo1', component: DemoPage1Component },
    { path: 'demo2', component: DemoPage2Component },
   { path: 'comparison-bot', component: ComparisonBotComponent },


    // FIXED — Standalone component MUST use loadComponent()
    {
      path: 'rob',
      loadComponent: () =>
        import('./agentic-ai-bot/agentic-ai-bot/new-tejas/new-rob.component')
          .then(m => m.NewRobComponent)
    },

    {
        path:'serena',
         component: serenaComponent
    }
,
    { path: 'reena', component: ReenaComponent },

    {
        path:'sandra',
        component:SandraComponent
    },

      {
        path:'max',
        component:MaxComponent
    },
       {
        path:'juli',
        component:JuliComponent
    },
     {
        path:'chat-bot',
        component:ChatBotComponent
    },
    
     {
        path:'audio-bot',
        component:AudioBotComponent
    },
    
     {
        path:'healthcare',
        component:HelthcareComponent
    },

     {
        path:'hospitality',
        component:HospitalityComponent
    },

     {
        path:'media',
        component:MediaComponent
    },

      {
        path:'retails',
        component:RetailsComponent
    },
     
   

];




