//
//  Picker.swift
//  bridges
//
//  Created by Saqib  on 05/01/2022.
//

import Foundation
import UIKit

@objc(Picker)

class Picker : NSObject, RCTBridgeModule{
  
  static func moduleName() -> String! {
    return "Picker"
  }
  
  static func requiresMainQueueSetup() -> Bool {
    return true;
  }
  
  @objc
  func ShowMessage(_ message: String,_ duration : Double){
    let alert = UIAlertController(title: nil, message: message, preferredStyle: .alert)
    alert.view.backgroundColor = .black
    alert.view.alpha = 0.5
    alert.view.layer.cornerRadius = 10
    
    DispatchQueue.main.async {
      (UIApplication.shared.delegate as? AppDelegate)?.window.rootViewController?.present(alert, animated: true, completion: nil)
    }
    
    DispatchQueue.main.asyncAfter(deadline: .now()+duration) {
      alert.dismiss(animated: true, completion: nil)
    }
    
  }
}
