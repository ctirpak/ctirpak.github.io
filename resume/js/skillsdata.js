var skillsdata;

skillsdata = {
  "Skills": {
    "Web Development": {
      "Server Side": {
        "Active Page": {
          "ASP": [0, 0, 0, 0, 10, 10, 10, 10, 20, 20, 20, 20, 20, 30, 40],
          "ASP.Net": [0, 0, 0, 0, 0, 0, 10, 10, 20, 20, 30, 30, 30, 30, 30]
        },
        "DB": {
          "SqlServer": [0, 0, 0, 0, 0, 10, 10, 10, 20, 30, 40, 40, 40, 60, 80]
        }
      },
      "Front Side": {
        "HTML": [0, 0, 10, 30, 50, 50, 60, 60, 60, 60, 50, 60, 70, 80, 90],
        "CSS": {
          "CSS": [0, 0, 10, 30, 30, 50, 40, 50, 65, 60, 70, 70, 80, 85, 90],
          "Responsive": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 40]
        },
        "JSFramework": {
          "Javascript": [0, 0, 0, 0, 10, 20, 20, 20, 20, 20, 20, 30, 30, 35, 70],
          "jQuery": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 30, 30, 25, 50],
          "Bootstrap": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30],
          "D3.js": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20],
          "Polymer": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20]
        },
      }
    },
    "Language": {
      "Dotnet": {
        "C#": [0, 0, 0, 0, 0, 0, 20, 20, 20, 20, 30, 25, 35, 35, 35],
        "VB": [0, 0, 0, 0, 0, 0, 20, 20, 30, 30, 30, 30, 40, 40, 50]
      },
      "Script": {
        "Javascript": [0, 0, 10, 30, 50, 50, 60, 60, 60, 80, 80, 60, 50, 50, 60],
        "VBScript": [0, 0, 0, 0, 20, 20, 30, 30, 40, 30, 20, 20, 20, 20, 20],
        "Python": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20]
      },
      "Java": {
        "Android": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30]
      },
      "Embedded": {
        "X86 Asm": [0, 0, 0, 0, 0, 0, 0, 0, 10, 40, 40, 30, 25, 20, 20],
        "C": [0, 0, 0, 0, 0, 0, 0, 20, 25, 30, 50, 50, 45, 40, 40]
      },
      "Other": {
        "T-SQL": [0, 0, 0, 0, 0, 10, 20, 40, 40, 40, 60, 90, 90, 90, 80],
        "VB": [0, 10, 20, 50, 60, 80, 90, 80, 70, 60, 60, 60, 60, 50, 50],
        "VB": [0, 0, 0, 0, 0, 30, 30, 50, 70, 70, 70, 90, 90, 90, 90]
      }
    },
    "Other": {
      "HW&FW": {
        "Protues": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 25, 20, 20, 25],
        "Keil": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 25, 20, 20, 25],
        "Code Warrior": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 15, 15, 10, 10, 20],
        "Protel": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 15, 10, 10, 5],
        "Multisim": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 30, 25, 20, 15],
        "Lego": [0, 0, 0, 0, 10, 40, 50, 45, 40, 35, 30, 25, 20, 15, 10]
      },
      "Productivity": {
        "Vim": [0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 40, 45, 50, 55],
        "AHK": [0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 30, 30, 35, 40],
        "Office": [0, 10, 20, 50, 60, 60, 70, 70, 80, 90, 90, 90, 90, 90, 90],
        "Photoshop": [0, 10, 20, 30, 35, 40, 45, 50, 60, 65, 60, 60, 55, 60, 60],
        "Batch": [40, 45, 50, 50, 50, 60, 65, 70, 75, 75, 80, 80, 80, 80, 80],
        "Shell": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 30, 35, 40],
        "Linux": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 40, 50, 55],
        "Marked Text": [10, 20, 20, 30, 40, 40, 40, 40, 40, 50, 60, 70, 80, 80, 80]
      },
      "Project": {
        "Agile": [0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 40, 50, 60, 70, 80],
        "CI": [0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 70, 70, 80, 80],
        "Repos": {
          "Git": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 50],
          "SVN": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
          "Clearcase": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30]
        },
        "Track": {
          "Redmine": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30],
          "Trello": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 20]
        },
        "Wiki": [0, 0, 0, 0, 0, 0, 0, 0, 10, 40, 50, 40, 40, 40, 40],
        "Quality Assurance": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 60, 60]
      },
      "Cloud": {
        "IaaS": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 15],
        "PaaS": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 30, 30],
        "SaaS": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]
      },
      "Test": {
        "TDD": [0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 5, 5, 15, 5, 5],
        "cucumber": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 10, 30],
        "Load test": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 30, 25, 20, 15]
      }
    }
  }
};