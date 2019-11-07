import { Component, OnInit, Inject, ChangeDetectorRef, ViewChild } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from '@angular/material';
import { ComponentService } from "../../component.service";

@Component({
  selector: "app-dialog-parameters",
  templateUrl: "./dialog-parameters.component.html",
  styleUrls: ["./dialog-parameters.component.scss"]
})
export class DialogParametersComponent implements OnInit {

  listModel = [];
  listComponents = [];
  listClass = [];
  listObjects = [];
  listParams = [];
  selectedParam;
  selectedObject;
  selectedClass;
  sleectedModel;
  constructor(public dialogRef: MatDialogRef<DialogParametersComponent>,
    private componentService: ComponentService, private chRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.listModel = this.data.list;
    // this.formula = this.data.formula;
    this.formula = this.data.formula.charAt(0) !== '=' ? this.data.formula : this.data.formula.slice(2); 
    this.formulaArr = this.formula.split(' ');
    this.sleectedModel = this.data.modelId;
    this.modelChange(this.sleectedModel);
  }

  @ViewChild("textArea") textArea;
  formulaData = "";
  formulaArr;
  formulaIndex;
  formulaItemClick(item, i){
    let fiend = this.formulaArr.indexOf("|");
    if(fiend > -1 && fiend < i ){
      i--
    }
    this.removeSpace();
    this.formulaIndex = i ;
    this.formulaArr.splice(i, 0, "|");
  }

  removeSpace(){
    this.formulaArr.forEach((e, i) => {
      if(e === "|") {
        this.formulaArr.splice(i, 1);
      }
    });
  }

  keyFormula(e) {
    // backspace
      if ((e.keyCode === 8 || e.keyCode === 46)) {
        this.formulaArr.splice(this.formulaIndex - 1 , 1);
        this.formulaIndex--;
      }
  }

  changeForumula(e) {
    let char = e.substr(e.length - 1);
    console.log(e)
    if (this.reOperator.test(char)) {
      this.formulaArr.splice(this.formulaIndex, 0, char);
      this.formulaIndex++;
    }
    if (this.reNumber.test(char) || char === '.') {
      console.log(e)
      if (this.reNumber.test(this.formulaArr[this.formulaIndex - 1]) || char === '.') {
        this.formulaArr[this.formulaIndex - 1] += char;
      } else {
        this.formulaArr.splice(this.formulaIndex, 0, char);
        this.formulaIndex++;
      }
    }

    this.textArea.nativeElement.value = "";
    this.chRef.detectChanges();
  }

  formulaWrapClick(){
    console.log(23)
  }

  modelChange(id) {
    this.componentService.getAllById(id).subscribe((data: any) => {
      this.listComponents = data;
      this.listClass = [];
      this.listObjects = [];
      this.listComponents.forEach(item => {
        this.listClass.push(item.objectClass);
        this.listObjects.push(item);
        item.parameters.forEach(element => {
          element.objectClass = item.objectClass;
          element.objectType = item.id;
        });
        this.listParams = [...this.listParams, ...item.parameters];
      });
      this.listClass = [...this.listClass.filter(this.onlyUnique)];
      this.listObjects = [...this.listObjects.filter(this.onlyUnique)];
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  paramsFilter(e) {

  }

  ok() {
    this.removeSpace();
    this.formulaArr.unshift("=");
    console.log(this.formulaArr, this.formulaArr.join(" "));
    this.formula = this.formulaArr.join(" ");
    this.dialogRef.close({ formula: this.formula });
    // let spcaSpit = this.formula.split(" ");
    // let valid = true;
    // spcaSpit.forEach((item) => {
    //   let arr = item.split(".");
    //   if (arr.length == 2) {
    //     this.listModel.forEach((model, modelIndex) => {
    //       let validModel;
    //       if (model.id === arr[0]) {
    //         validModel = true;
    //         let validParam = false;
    //         this.listParams.forEach((comp, index) => {
    //           if (comp.id === arr[1]) {
    //             validParam = true
    //           }

    //           if (this.listParams.length === (index + 1) && !validParam) {
    //             valid = false;
    //           }
    //         })
    //       }
    //       if (this.listModel.length === (modelIndex + 1) && !validModel) {
    //         valid = false;
    //       }
    //     })
    //   }
    // })

    // if (valid) {
    //   this.dialogRef.close({ formula: this.formula });
    // }
  }

  selectedFormulaVar = "";
  formula = "= ";

  paramsChange(e) {
    let item = this.searchById(e, this.listParams);
    let model = this.searchById(this.sleectedModel, this.listModel);
    let object = this.searchById(this.selectedObject, this.listObjects);
    // if(this.sleectedModel === model.id) {
    //   this.selectedFormulaVar = item.id;
    // } else {
      this.selectedFormulaVar = model.id + "." + this.selectedObject + "." + item.id;
    // }
  }

  add() {
        // if (this.reOperator.test(this.formula[this.formula.length - 1])) {
        //   this.formula = this.formula + ' ' + this.selectedFormulaVar;
        // } else {
        //   this.formula += this.selectedFormulaVar;
        // }
        this.formulaArr.splice(this.formulaIndex, 0, this.selectedFormulaVar);
  }

  searchById(id, arr) {
    if (arr) {
      let result = arr.find(element => element._id === id);
      return result;
    }
  }

  re = /^\s{0,1}\d+[.]?(\d+)?(\s{0,1}[+|(\-)|*|/]+\s{0,1}\d+[.]?(\d+)?)*\s{0,1}$/;
  reOperator = /^[+\-*()/]/;
  reNumber = /^\d/;
  // reNumber = /(?<=^| )\d+(\.\d+)?(?=$| )/;
  reDigit = /^[0-9]*.([0-9]+)?$/mg;
  keyPeriod = true;
  boolLastOperator;

  renameFormula(text) {
    let newFormula = text + ' ';
    setTimeout(() => {
      this.formula = newFormula;
      this.boolLastOperator = true;
    }, 1);
  }

  checkPattern(elem) {

    setTimeout(() => {
      if (this.formula[this.formula.length - 1] === ' ') {
        if (this.reOperator.test(this.formula[this.formula.length - 2])) {
          this.boolLastOperator = true;
        } else {
          this.boolLastOperator = false;
        }
      } else {
        // backspace
        if ((elem.keyCode !== 8 && elem.keyCode !== 46)) {
          if (this.reOperator.test(this.formula[this.formula.length - 1])) {
            this.boolLastOperator = true;
          } else {
            this.boolLastOperator = false;
          }
        }
      }
    }, 1);

    // operator
    if (this.reOperator.test(elem.key)) {
      this.keyPeriod = true;
      if (this.formula[this.formula.length - 1] === '.') {
        this.formula = this.formula + '0'
      }

      if (this.formula[this.formula.length - 2] === '=') {
        return false;
      } else if (
        this.formula[this.formula.length - 1] !== ' ' &&
        this.reOperator.test(this.formula[this.formula.length - 1])
      ) {
        this.formula = this.formula + ' ';
      } else if (
        this.formula[this.formula.length - 1] !== ' ' &&
        (
          !this.reOperator.test(this.formula[this.formula.length - 1])
        )
      ) {
        this.formula = this.formula + ' ' + elem.key + ' ';

      } else if (
        this.formula[this.formula.length - 1] === ' ' &&
        !this.reOperator.test(this.formula[this.formula.length - 2])
      ) {
        if (!this.reOperator.test(this.formula[this.formula.length - 2])) {
          this.formula = this.formula + elem.key + ' ';
        }
      }
    }

    if (elem.key === ".") {
      if (!this.reNumber.test(this.formula[this.formula.length - 1])) {
        return false;
      }
      if (!this.keyPeriod) {
        return false;
      }
      this.keyPeriod = false;
    }
    //space
    if (elem.keyCode === 32) {
      if (this.formula[this.formula.length - 1] === '.') {
        this.formula = this.formula + '0'
      }
    }
    // backspace
    if (elem.keyCode === 8 || elem.keyCode === 46) {
      setTimeout(() => {
        if (this.formula[this.formula.length - 1] !== ' ') {
          let arr = this.formula.split(' ');
          let number = this.reNumber.test(arr[arr.length - 1]);
          let oper = this.reOperator.test(arr[arr.length - 1]);
          if (
            !number &&
            !oper
          ) {
            this.renameFormula(arr.splice(0, arr.length - 1).join(' '))
          }
        }
      }, 1);
    }
    if (
      this.formula[this.formula.length - 1] === ' ' &&
      this.reNumber.test(elem.key) &&
      this.reNumber.test(this.formula[this.formula.length - 2])
    ) {
      return false;
    }
    //space
    if (elem.keyCode === 32 && this.formula[this.formula.length - 1] === ' ') {
      return false;
    }
    if (this.reNumber.test(elem.key)) {
      if (this.reOperator.test(this.formula[this.formula.length - 1])) {
        this.formula = this.formula + ' ';
      }
    }
    if (
      !this.reNumber.test(elem.key) &&
      // backspace
      (elem.keyCode !== 8 && elem.keyCode !== 46) &&
      // space
      elem.keyCode !== 32 &&
      elem.key !== "."
    ) {
      return false;
    } else {
      if (!this.reNumber.test(elem.key) && elem.key !== ".") {
        this.keyPeriod = true;
      }
      //backspace
      if (elem.keyCode !== 8 && elem.keyCode !== 46) {
        if (this.reOperator.test(this.formula[this.formula.length - 1])) {
          this.formula = this.formula + ' ';
        }
      }
    }
  }

  currentFotmula;

  change(e) {
    let re = /^\s{0,1}\d+[.]?(\d+)?(\s{0,1}[+|\-|*|/]+\s{0,1}\d+[.]?(\d+)?)*\s{0,1}$/;
    let patternMath = /\s?([+|(\-)|*|/])\s?$/;
    setTimeout(() => {
      if (this.formula.slice(0, 2) !== '= ') {
        this.formula = '= '
      }
    }, 110);
    // this.getBoolLastOperator();
    //   if (value.slice(0, 1) === '=') {
    //     if (value.slice(0, 2) === '= ') {
    //       value = value.replace('= ', '')
    //     } else {
    //       value = value.replace('=', '')
    //     }
    //   }
    //   if (!re.test(value)) {
    //     if (!patternMath.test(value[value.length - 1])) {
    //       setTimeout(() => {
    //         this.formula = '= ' + value.substring(0, value.length - 1);

    //         this.formula = this.formula.trim();
    //         if (!value.length) {
    //           this.formula = this.formula + ' '
    //         }
    //       }, 1);
    //     } else {
    //       this.formula = this.formula + '/s';
    //     }
    //     setTimeout(() => {
    //       this.boolKeyPress = false;
    //     }, 2);
    //   } else {
    //     this.currentFotmula = this.formula;
    //     this.boolKeyPress = false;
    //     console.log(this.currentFotmula);
    //   }
    // }
  }
}