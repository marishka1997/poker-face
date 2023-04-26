import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { CashGamesComponent } from './cash-games/cash-games.component';
import { NewYearSeriesComponent } from './new-year-series/new-year-series.component';
import { FinalStageComponent } from './final-stage/final-stage.component';
import { LeaderboardTableComponent } from './leaderboard-table/leaderboard-table.component';
import { PrizesComponent } from './prizes/prizes.component';
import { LeaderboardResultsComponent } from './leaderboard-results/leaderboard-results.component';
import { ExtraInfoComponent } from './extra-info/extra-info.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { TournamentsScoresComponent } from './tournaments-scores/tournaments-scores.component';
import { DailyTournamentsComponent } from './daily-tournaments/daily-tournaments.component';
import { MaltaFestivalComponent } from './malta-festival/malta-festival.component';
import { FinalToursComponent } from './final-tours/final-tours.component';
import { MysticalKeyComponent } from './mystical-key/mystical-key.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalWindowComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CashGamesComponent,
    NewYearSeriesComponent,
    FinalStageComponent,
    LeaderboardTableComponent,
    PrizesComponent,
    LeaderboardResultsComponent,
    ExtraInfoComponent,
    TermsConditionsComponent,
    PromotionsComponent,
    TournamentsComponent,
    TournamentsScoresComponent,
    DailyTournamentsComponent,
    MaltaFestivalComponent,
    FinalToursComponent,
    MysticalKeyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
