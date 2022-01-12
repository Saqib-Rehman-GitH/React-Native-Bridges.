//
//  CustomView.swift
//  bridges
//
//  Created by Saqib on 1/8/22.
//

import Foundation
import UIKit

class CustomView : UIView {
  
  override init(frame: CGRect) {
      let cgRect = CGRect(x: 0, y: 0, width: 300, height: 300)
      super.init(frame: cgRect)
      setupView()
    }
  
  required init?(coder: NSCoder) {
    super.init(coder: coder)
    setupView()
  }
  private func setupView() {
     backgroundColor = .red
   }
}
