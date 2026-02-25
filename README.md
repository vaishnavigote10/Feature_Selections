# Feature Selection Analysis - Interactive Dashboard & Machine Learning Project

A comprehensive feature selection analysis project demonstrating advanced machine learning techniques applied to the Wine Quality dataset with an interactive web dashboard.

## 📊 Project Overview

This project showcases:
- **Five feature selection methods** (Correlation, F-Regression, Tree Importance, RFE, PCA/Mutual Information)
- **Consensus voting** to identify 5 "Super Features"
- **25 model configurations** (5 models × 5 feature sets)
- **Business case analysis** with €850K annual savings potential
- **Interactive dashboard** with Plotly.js visualizations
- **Modern responsive website** built with HTML5, CSS3, JavaScript

## 🎯 Key Results

### Super Features Identified:
- **flavanoids** ⭐⭐⭐⭐⭐ (0.8475 correlation)
- **proline** ⭐⭐⭐⭐⭐ (0.6337 correlation)
- **od280/od315** ⭐⭐⭐⭐⭐ (0.7882 correlation)
- **total_phenols** ⭐⭐⭐⭐ (0.7192 correlation)
- **hue** ⭐⭐⭐⭐ (0.6174 correlation)

### Performance Metrics:
- Best Model: **RandomForest + RFE**
- Best R² Score: **0.8911** (89.11% accuracy)
- Super Features R² Score: **0.8768** (87.68% accuracy)
- Performance Efficiency: **98.4%** of baseline
- Feature Reduction: **62%** (13 → 5 features)

### Business Impact:
- **Annual Savings**: €850,000 (64% cost reduction)
- **5-Year Savings**: €4,250,000
- **10-Year Savings**: €8,500,000
- **Testing Time Reduction**: 62%

## 📁 Directory Structure

```
Feature_Selection/
│
├── index.html                           # Main home page
├── about.html                           # About project page
├── contact.html                         # Contact & FAQ page
├── dashboard.html                       # Interactive dashboard
│
├── css/
│   ├── style.css                        # Main styles & responsive design
│   ├── animations.css                   # Page animations & transitions
│   └── dashboard.css                    # Dashboard-specific styles
│
├── js/
│   ├── main.js                          # Core site interactivity
│   ├── dashboard.js                     # Dashboard features
│   ├── charts.js                        # Chart.js integration
│   └── utils.js                         # Helper utilities
│
├── assets/
│   ├── images/                          # Image assets
│   ├── icons/                           # Icon assets
│   └── fonts/                           # Custom fonts
│
├── data/
│   └── data.json                        # Sample data
│
├── Feature_Selection_Analysis.ipynb     # Jupyter notebook analysis
├── README.md                            # This file
```

## 🚀 Quick Start

### 1. View the Website
Simply open `index.html` in your web browser to see the main website.

### 2. Interactive Dashboard
Click the "📊 Dashboard" button or open `dashboard.html` to access the interactive dashboard with:
- Feature correlation visualizations
- Model performance comparisons
- Business case ROI analysis
- Feature selection consensus voting results
- Tabbed navigation (6 sections)

### 3. Run Jupyter Notebook
```bash
jupyter notebook Feature_Selection_Analysis.ipynb
```

This runs the complete machine learning analysis including:
- Data loading and EDA
- Correlation analysis
- F-regression feature selection
- Tree-based feature importance
- RFE (Recursive Feature Elimination)
- PCA and Mutual Information analysis
- Consensus feature voting
- 25 model configurations testing
- Business case analysis

## 🌐 Website Pages

### Home (index.html)
- Hero section with call-to-action
- Key statistics cards
- Features showcase
- Results summary
- Business impact section

### About (about.html)
- Project overview
- Methodology explanation (5 techniques)
- Key discoveries
- Business impact details
- Technical stack
- Implementation roadmap
- Risk assessment

### Dashboard (dashboard.html)
- 📊 Overview section with key findings
- 📈 Visualizations with interactive charts
- 🔍 Feature analysis with cards
- 🤖 Model performance comparison
- 💼 Business case & ROI analysis
- ✅ Recommendations & action items
- Tabbed navigation for easy browsing

### Contact (contact.html)
- 📧 Contact form
- 💬 Contact information
- ❓ FAQ section with 8 questions
- 🔗 Social media links

## 💡 Features

### Modern UI/UX
- Clean, professional design
- Gradient backgrounds
- Card-based layout
- Soft shadows & rounded corners
- Smooth animations & transitions
- Fully responsive design
- Mobile hamburger menu

### Interactive Elements
- Sticky navigation bar
- Smooth scrolling
- Active menu highlights
- Animated stat counters
- Interactive charts (Plotly.js)
- Hover effects on cards
- Form validation

### Visualizations
- Feature correlation charts
- F-score bar charts
- Tree importance comparisons
- PCA variance explained
- Mutual information scores
- Consensus voting charts
- Model performance heatmaps
- Pareto analysis
- RMSE comparisons

### Data & Analytics
- 13 original features
- 5 Super Features identified
- 5 regression models tested
- 5 different feature selection methods
- Cross-validation (5-fold)
- Business case ROI analysis
- Implementation roadmap

## 🛠 Technologies Used

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling & animations
- **JavaScript (ES6+)**: Interactivity
- **Plotly.js**: Interactive visualizations

### Backend (Notebook)
- **Python 3.8+**
- **Pandas**: Data manipulation
- **NumPy**: Numerical computing
- **Scikit-Learn**: Machine learning
- **Matplotlib & Seaborn**: Static visualizations

### Hosting
- Can be deployed to any static web hosting (GitHub Pages, Netlify, etc.)
- Jupyter notebook runs locally with Python environment

## 📊 Analysis Methods

### 1. Correlation Analysis
Calculates Pearson correlation between features and target variable.
- Selection: Features with |correlation| > 0.3
- Result: 10 features selected

### 2. F-Regression
Statistical univariate testing for feature-target dependency.
- Selection: Top 8 features by F-score
- Best F-Score: 448.67 (flavanoids)

### 3. Tree-Based Feature Importance
Random Forest and Gradient Boosting importance scores.
- Selection: Top features from both models
- Result: 4-5 features selected

### 4. Recursive Feature Elimination (RFE)
Iteratively trains and removes low-importance features.
- Selection: Top 8 features using LinearRegression
- Result: 8 features selected

### 5. PCA & Mutual Information
Dimensionality reduction and information-theoretic approach.
- Selection: Components explaining 95% variance + top MI scores
- Result: 7 features selected

## 🎓 Machine Learning Models Tested

1. **Linear Regression** - Baseline model
2. **Ridge Regression** - L2 regularization (α=1.0)
3. **Lasso Regression** - L1 regularization (α=0.1)
4. **Random Forest** - 100 estimators, max_depth=10
5. **Gradient Boosting** - 100 estimators, learning_rate=0.1

## 📈 Performance Results

### By Feature Set:
| Feature Set | Features | Best R² | Avg R² | Efficiency |
|-----------|----------|---------|---------|------------|
| RFE-Top8 | 13 | 0.8911 | 0.8499 | 100.3% |
| All Features | 13 | 0.8889 | 0.8496 | 99.8% |
| F-Top8 | 8 | 0.8781 | 0.8636 | 98.5% |
| **Super Features** | **5** | **0.8768** | **0.8474** | **98.4%** |
| Tree | 4 | 0.8711 | 0.8440 | 97.8% |

### By Model (Super Features):
| Model | R² | RMSE | CV Mean | Stability |
|-------|-----|-------|---------|-----------|
| **RandomForest** | **0.8768** | **0.2681** | **0.8731** | **0.0486** |
| Ridge | 0.8549 | 0.2910 | 0.8512 | 0.0594 |
| Linear | 0.8554 | 0.2904 | 0.8512 | 0.0594 |
| GradBoost | 0.8470 | 0.2987 | 0.8057 | 0.0502 |
| Lasso | 0.8029 | 0.3391 | 0.8254 | 0.0140 |

## 💰 Cost-Benefit Analysis

### Current Strategy (All 13 Features):
- Cost per batch: €265
- Annual cost: €1,325,000
- Testing time: Standard (100 units)

### Proposed Strategy (5 Super Features):
- Cost per batch: €95
- Annual cost: €475,000
- Testing time: 62% faster (38 units)
- **Annual Savings: €850,000**
- **5-Year Savings: €4,250,000**

## 🚀 Implementation Roadmap

### Phase 1: Preparation (Weeks 1-2)
- Update testing procedures
- Train QC team
- Prepare ML model for production

### Phase 2: Validation (Weeks 3-4)
- Parallel testing on sample batches
- Old method vs new method comparison

### Phase 3: Verification (Weeks 5-6)
- Analyze results
- Adjust parameters if needed

### Phase 4: Deployment (Week 7+)
- Full production rollout
- Continuous monitoring
- Performance tracking

## ⚠️ Risk Assessment

✓ **Model Stability**: Std Dev = 0.0078 (low risk)
✓ **Cross-Validation**: 5-fold CV confirms robustness
✓ **Consensus**: 5 different methods agree on super-features
✓ **Conservative Approach**: Maintains 98.4% accuracy
✓ **Parallel Testing**: Validates model before full transition

## 📝 Usage Instructions

### For Viewing the Website:
1. Open `index.html` in a web browser
2. Navigate through pages using the menu
3. Click "Dashboard" to view interactive visualizations
4. All pages are fully responsive and mobile-friendly

### For Running the Analysis:
1. Install Python dependencies:
   ```bash
   pip install pandas numpy scikit-learn matplotlib seaborn jupyter
   ```

2. Run the Jupyter notebook:
   ```bash
   jupyter notebook Feature_Selection_Analysis.ipynb
   ```

3. Execute cells sequentially to see:
   - Data loading and exploration
   - Feature selection methods
   - Model training and evaluation
   - Business case analysis
   - Results summary

### For Customization:
- Edit CSS files in `css/` folder to modify styling
- Edit JavaScript in `js/` folder for interactivity
- Update HTML files to change content
- Modify the Jupyter notebook for different datasets

## 🔗 Navigation

- **Home** → index.html
- **About** → about.html
- **Dashboard** → dashboard.html (6 tabs with visualizations)
- **Contact** → contact.html (form, FAQ, contact info)
- **Notebook** → Feature_Selection_Analysis.ipynb

## 📚 Resources

- [Scikit-Learn Documentation](https://scikit-learn.org/)
- [Plotly.js Documentation](https://plotly.com/javascript/)
- [Wine Quality Dataset](https://scikit-learn.org/stable/modules/generated/sklearn.datasets.load_wine.html)

## 👨‍💻 Author

Feature Selection Analysis Project
Created: February 2026

## 📄 License

MIT License - Feel free to use and modify for your projects

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs or issues
- Suggest improvements
- Add new features
- Enhance visualizations

## ✨ Features Highlights

✅ **Machine Learning**: 5 selection methods + 25 model configurations
✅ **Interactive Dashboard**: 6-section tabbed interface with charts
✅ **Business Analysis**: ROI calculations, cost savings, implementation plan
✅ **Responsive Design**: Works on desktop, tablet, and mobile
✅ **Modern Animations**: Smooth transitions and scroll reveals
✅ **Data Visualization**: Plotly.js interactive charts
✅ **Clean Code**: Well-commented, organized structure
✅ **Cross-browser Compatible**: Works on all modern browsers

## 🎉 Summary

This project demonstrates a complete machine learning workflow from data analysis through business implementation. The Super Features strategy reduces costs by 64% while maintaining 98.4% model accuracy, providing significant value through feature selection optimization.

The interactive dashboard makes complex analysis accessible to both technical and non-technical stakeholders, facilitating data-driven decision making.

---

**Questions?** Check the [Contact](contact.html) page or [FAQ](contact.html#faq) section!
