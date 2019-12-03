import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "../auth/auth.service";
import { ModelService } from "../shared/model.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Input() user;
  selectedModel;
  constructor(private authService: AuthService, public router: Router, private modelService: ModelService) {
   console.log(2)
    this.modelService.selectedModelEvent.subscribe((data) => {
      console.log(2)
      this.selectedModel = data;
    });
  }

  ngOnInit() {

  }

  logout(): void {
    this.authService.signOut();
    this.navigate("/auth/login");
  }

  navigate(link): void {
    this.router.navigate([link]);
  }
}
