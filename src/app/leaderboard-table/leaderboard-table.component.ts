import { Component } from '@angular/core';

@Component({
  selector: 'app-leaderboard-table',
  templateUrl: './leaderboard-table.component.html',
  styleUrls: ['./leaderboard-table.component.css']
})
export class LeaderboardTableComponent {
  prizes = [
    {cell1: 1, cell2: '-', cell3: 'A კატეგორიის', cell3NewLine: 'საგზური'},
    {cell1: 2, cell2: '-', cell3: 'B კატეგორიის', cell3NewLine: 'საგზური'},
    {cell1: 3, cell2: '2000 ლ', cell3: 'სპეც. ტურნირის', cell3NewLine: 'ბილეთი'},
    {cell1: 4, cell2: '1500 ლ', cell3: 'სპეც. ტურნირის', cell3NewLine: 'ბილეთი'},
    {cell1: 5, cell2: '1300 ლ', cell3: 'სპეც. ტურნირის', cell3NewLine: 'ბილეთი'},
    {cell1: 6, cell2: '1200 ლ', cell3: 'სპეც. ტურნირის', cell3NewLine: 'ბილეთი'},
    {cell1: 7, cell2: '1000 ლ', cell3: 'სპეც. ტურნირის', cell3NewLine: 'ბილეთი'},
    {cell1: 8, cell2: '800 ლ', cell3: 'სპეც. ტურნირის', cell3NewLine: 'ბილეთი'},
    {cell1: 9, cell2: '700 ლ', cell3: 'სპეც. ტურნირის', cell3NewLine: 'ბილეთი'},
    {cell1: 10, cell2: '500 ლ', cell3: 'სპეც. ტურნირის', cell3NewLine: 'ბილეთი'},
  ]
}
